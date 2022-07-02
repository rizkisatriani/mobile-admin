import React, { Component } from 'react'
import { View, Text, Image, ScrollView, StatusBar, TextInput, Alert, TouchableOpacity,Platform } from 'react-native'
import main from '../styles/main'
import { BASE_URL } from '../constants/http.js';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class Perjanjian extends Component {
    login = async() => {   
           await AsyncStorage.setItem("setuju",JSON.stringify({setuju:1}) )
           this.props.navigation.replace('Login');   
    }; 
  render() {
    return (
        <View style={[main.container, { backgroundColor: "#00a8ff" }]}>
          <StatusBar barStyle="light-content" backgroundColor="#00a8ff" />
          
          <ScrollView>
            <View style={[{ backgroundColor: "#fff",margin:20,padding:10 }]}> 
            <Image
                    style={{
                        width: 80,
                        height: 50,
                        alignSelf:'center'
                      }}
                    source={{uri: `${BASE_URL}/perpus.png`}}
                    />
            <Text style={[{ fontSize:12,textAlign: 'center',fontWeight:'bold',padding:10 }]}> 
            APLIKASI PERPUSTAKAAN PT. GREAT GIANT PINEAPPLE 
            </Text>
            <Text style={[{ fontSize:12,textAlign: 'center',fontWeight:'bold',padding:10 }]}> 
            MOHON MEMBACA DENGAN SEKSAMA SEBELUM MENGGUNAKAN FITUR
            PENDAFTARAN INI
            </Text>
            <Text style={[{ fontSize:12,textAlign: 'justify' ,padding:10 }]}> 
            Pernyataan menerima dan menyetujui Syarat dan Ketentuan layanan pendaftaran sebagai anggota
            Perpustakaan PT. Great Giant Pineapple : 
            </Text>
            <Text style={[{ fontSize:12,textAlign: 'justify' ,padding:10 }]}> 
            Penggunaan Aplikasi Perpustakaan PT. Great Giant Pineapple Mobile untuk fitur Pendaftaran dilakukan
            oleh Anggota Perpustakaan yang menyatakan setuju dan menerima syarat dan ketentuan yang ditetapkan
            oleh Pustakawan Perpustakaan PT. Great Giant Pineapple. Jika Anggota tidak menyetujui syarat dan
            ketentuan ini, Anggota tidak diperkenankan menggunakan fitur Pendaftaran Perpustakaan PT. Great Giant
            Pineapple. 
            </Text>
            <Text style={[{ fontSize:12,textAlign: 'justify' ,padding:10 }]}> 
            Perpustakaan PT. Great Giant Pineapple sewaktu-waktu dapat mengubah syarat dan ketentuan penggunaan
            Layanan Pendaftaran Perpustakaan PT. Great Giant Pineapple yang diberlakukan kepada seluruh pengguna
            Aplikasi Perpustakaan PT. Great Giant Pineapple.
            </Text>
            <Text style={[{ fontSize:12,textAlign: 'justify',fontWeight:'bold' ,padding:10 }]}> 
            Syarat dan Ketentuan :
            </Text>
            <Text style={[{ fontSize:12,textAlign: 'justify' ,padding:10,paddingBottom:5 }]}> 
            1. Anggota Perpustakaan memiliki Nomor Induk Karyawan (ID) untuk melaksanakan kewajiban
apapun yang mungkin terjadi akibat penggunaan Aplikasi Perpustakaan PT. Great Giant Pineapple
            </Text>
            <Text style={[{ fontSize:12,textAlign: 'justify' ,padding:10,paddingBottom:5 }]}> 
            2. Mengisi dan memberikan data yang benar dan sesuai serta dapat dipertanggungjawabkan.
            </Text>
            <Text style={[{ fontSize:12,textAlign: 'justify' ,padding:10,paddingBottom:5 }]}> 
            3. Wajib menjaga, tidak merusak, mencoret, merobek, melipat atau menghilangkan buku yang
dipinjam. Apabila terdapat salah satu kejadian tersebut maka akan dikenakan sanksi sesuai dengan
ketentuan yang berlaku. 
            </Text>
            <Text style={[{ fontSize:12,textAlign: 'justify' ,padding:10,paddingBottom:5 }]}> 
            4. Mengembalikan buku sesuai dengan jadwal yang sudah ditentukan disesuaikan dengan jam kerja
karyawan PT. Great Giant Pineapple. 
            </Text>
            <Text style={[{ fontSize:12,textAlign: 'justify' ,padding:10,paddingBottom:5 }]}> 
            5. Membayar denda sebesar Rp. 5000,- apabila terjadi keterlambatan dalam melakukan pengembalian
buku dengan ketentuan :
a. Denda terhitung 1 hari setelah batas akhir pengembalian buku.
b. Denda akan berlipat ganda menyesuaikan dengan keterlambatan hari dalam mengembalikan.
c. Apabila buku hilang maka diharuskan mengganti buku tersebut. Buku dapat diganti dengan
buku atau diganti dengan membayar sesuai dengan harga buku tersebut.
            </Text>
            <Text style={[{ fontSize:12,textAlign: 'justify' ,padding:10,paddingBottom:5 }]}> 
            6. Menyetujui untuk mengulang proses pendaftaran apabila :
a. Pendaftaran ditolak karena terdapat ketentuan yang harus diperbaiki.
b. Melakukan perbaikan data untuk melakukan pendaftaran kembali.
            </Text>
            <Text style={[{ fontSize:12,textAlign: 'justify' ,padding:10,paddingBottom:5 }]}>  
            7. Wajib melaporkan ke Pustakawan apabila buku hilang atau rusak.
            </Text>
            <Text style={[{ fontSize:12,textAlign: 'justify' ,padding:10,paddingBottom:5 }]}> 
            8. Wajib menjaga Fasilitas yang diberikan oleh Perpustakaan
            </Text>
            <Text style={[{ fontSize:12,textAlign: 'justify' ,padding:10,paddingBottom:5 }]}> 
            9. Mematuhi ketentuan dan prosedur pelayanan yang berlaku untuk Anggota Perpustakaan.
            </Text>
            <Text style={[{ fontSize:12,textAlign: 'justify' ,padding:10,paddingBottom:5 }]}> 
            10. Apabila dikemudian hari Anggota tidak lagi bergabung sebagai Anggota Perpustakaan maka
Pustakawan dapat menghapus data Anggota yang terdaftar
            </Text>
            <Text style={[{ fontSize:12,textAlign: 'justify' ,padding:10,paddingBottom:5 }]}> 
            11. Memberikan kuasa kepada Pustakawan untuk menggunakan informasi Anggota dan dokumentasi
pendukung lainnya jika diperlukan. 
            </Text>
            <Text style={[{ fontSize:12,textAlign: 'justify' ,padding:10,paddingBottom:5 }]}> 
            12. Apabila ditemukan penyalahgunaan wewenang yang terbukti merugikan Anggota dan atau
Perpustakaan PT. Great Giant Pineapple maka akan diproses sesuai peraturan perundang-undangan
yang berlaku
            </Text>
            <Text style={[{ fontSize:12,textAlign: 'justify' ,padding:10,paddingBottom:5 }]}> 
            Dengan memilih “Saya Setuju” di bawah ini, maka saya menyatakan menerima dan menyetujui syarat dan
ketentuan layanan pendaftaran Aplikasi Perpustakaan PT. Great Giant Pineapple tersebut.
            </Text>
            </View>
            </ScrollView>
           
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => { 
            this.login()
          }}
          style={main.buttonBorder}>
          {<Text style={[{ color: '#fff', fontSize: 18 }]} >Setuju</Text>}
        </TouchableOpacity>
          </View>
    )
  }
}
