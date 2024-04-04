import { Request, Response } from "express";
import dotenv from "dotenv";
import User from "../schemas/User";
import { enc } from "crypto-js";
import AES from "crypto-js/aes";
import jwt from "jsonwebtoken";

dotenv.config();

export default class AuthController {
  public async register(req: Request, res: Response) {
    const { jsonCrypto } = req.body;
    const json = CryptoJS.AES.decrypt(jsonCrypto, process.env.SECRET!).toString(
      CryptoJS.enc.Utf8
    );
    const { name, email, password } = JSON.parse(json);

    if (!name || !email || !password)
      return res
        .status(400)
        .send({ message: "name or email or password not provider" });

    try {
      // const user = await User.findOne({ email })
      if (await User.findOne({ email }))
        return res.status(400).send({ message: "email ja cadastrado" });

      const passwordCrypt = CryptoJS.AES.encrypt(
        password,
        process.env.SECRET!
      ).toString();

      const newUser = new User({
        name: name,
        email: email,
        password: passwordCrypt,
      });

      await newUser.save();
      return res.status(201).send({ message: "user created" });
    } catch (error) {
      return res.status(500).send({ message: "something faild" });
    }
  }

  public async login(req: Request, res: Response) {
    const { jsonCrypto } = req.body;
    const json = CryptoJS.AES.decrypt(jsonCrypto, process.env.SECRET!).toString(
      CryptoJS.enc.Utf8
    );
    const { email, password } = JSON.parse(json);
    if (!email || !password)
      return res
        .status(400)
        .send({ message: "Email or password not provider" });
    try {
      const user = await User.findOne({ email });
      if (!user) return res.status(400).send({ message: "Invalid Email" });
      const passData = CryptoJS.AES.decrypt(process.env.SECRET!, "lasanha").toString(
        CryptoJS.enc.Utf8
      );
      if (passData != password) {
        return res.status(400).send({ message: "Invalid password" });
      }
      
      const token = jwt.sign({ id: user._id }, process.env.SECRET!, {
        expiresIn: "1 day",
      });
      return res.status(200).send({ token: token });
    } catch (error) {
      console.log(error);
      return res.status(500).send({ message: "something wrong" });
    }
  }
}
