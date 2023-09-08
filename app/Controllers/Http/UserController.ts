import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import User from "App/Models/User";

export default class UserController {
  public async index({ view }: HttpContextContract) {
    const users = await User.query().preload("role");
    const state = {
      users: users
    };
    return view.render("pages/user/index", state);
  }

  public async create({}: HttpContextContract) {
  }

  public async store({}: HttpContextContract) {
  }

  public async show({}: HttpContextContract) {
  }

  public async edit({}: HttpContextContract) {
  }

  public async update({}: HttpContextContract) {
  }

  public async destroy({}: HttpContextContract) {
  }
}
