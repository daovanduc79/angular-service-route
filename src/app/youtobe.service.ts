import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class YoutobeService {

  playlist = [
    { id: 'GwCUbhE0TY0', song: 'Một Bước Yêu Một Dặm Đau - Mr. Siro' },
    { id: 'BnWiFq0AxQc', song: 'Đừng Lo Anh Đợi Mà - Mr. Siro' },
    { id: 'rS_Lkxtkc1c', song: 'Khóc Cùng Em - Mr. Siro x Gray x Wind ' },
    { id: 'agPPbdz-l7g', song: 'Lắng Nghe Nước Mắt - Mr. Siro' },
    { id: 'OVDg8CQlBBA', song: 'Day Dứt Nỗi Đau - Mr. Siro' }
  ];

  constructor() { }

  find(id: string) {
    return this.playlist.find(item => item.id === id);
  }
}
