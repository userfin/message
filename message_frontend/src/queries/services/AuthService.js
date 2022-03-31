import $api from '../queris_client';

export default class AuthService {
  static async login(tag, password) {
    return await $api.post('/users/login', {tag, password});
  }

  static async registration(tag, name, phone, bio, password, imagefile) {
    var formData = new FormData();
    formData.append('tag', tag);
    formData.append('name', name);
    formData.append('phone', phone);
    formData.append('bio', bio);
    formData.append('password', password);
    formData.append('image', imagefile);
    return await $api.post('/users/registration', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
  }
}