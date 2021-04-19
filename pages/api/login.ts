import { JWT_TOKEN_EXPIRY, SALT, SET_COOKIE_OPTIONS } from '@constants/index';
import { setCookie } from '@utils/auth';
import { fireCook } from '@utils/database/index';
import { hash, compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import type { NextApiRequest, NextApiResponse } from 'next';
import { v4 as uuidv4 } from 'uuid';
// import admin from 'firebase-admin';

const secret = process.env.JWT_SECRET;

const Signin = async (req: NextApiRequest, res: NextApiResponse) => {
  const { body, method } = req;
  if (method === 'GET') {
    return res.end('Not support GET method!');
  }
  const { username, password } = body;
  if (!username || !password) {
    return res.status(400).json({
      message: 'Thiếu thông tin đăng nhập!',
    });
  }
  //   const bucket = admin.storage().bucket("gs://personal-finance-managements.appspot.com");
  const docs = await fireCook
    .collection('users')
    .where('username', '==', username)
    .get();

  if (docs.empty) {
    return res.status(401).json({
      message: 'Người dùng không tồn tại!',
    });
  }

  const doc = docs.docs[0];

  const user: UserPayload = {
    id: doc.id,
    ...doc.data(),
  };

  const { password: passwordHash, id } = user;

  const claims = {
    id,
    username,
  };

  const isMatch = await compare(password, passwordHash);
  if (!isMatch) {
    return res.status(401).json({
      message: 'Sai mật khẩu!',
    });
  }

  const refreshToken = uuidv4();
  const refreshTokenHash = await hash(refreshToken, SALT);
  const token = sign(claims, secret, { expiresIn: '15m' });
  await fireCook.collection('users').doc(id).update({
    refreshTokenHash,
  });

  res.setHeader('Set-Cookie', [
    setCookie({
      name: 'auth',
      value: token,
      options: SET_COOKIE_OPTIONS({ maxAge: JWT_TOKEN_EXPIRY }),
    }),
    setCookie({ name: 'user_id', value: id }),
    setCookie({ name: 'refresh_token', value: refreshToken }),
  ]);
  return res.status(200).json({
    message: 'Đăng nhập thành công!',
    status: 'OK',
  });
};

export default Signin;
