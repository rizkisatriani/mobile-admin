import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity  } from 'react-native'
import { widthPercentageToDP, heightPercentageToDP } from '../helpers/PixelRatio'
import Cuti from '../../assets/iconCuti.svg'
import Diklat from '../../assets/iconDiklat.svg'
import Jabatan from '../../assets/iconJabatan.svg'
import Semua from '../../assets/iconMore.svg'
import Mutasi from '../../assets/iconMutasi.svg'
import Pendidikan from '../../assets/iconPendidikan.svg'
import Seminar from '../../assets/iconSeminar.svg'
import Tunjangan from '../../assets/iconTunjangan.svg'
import Hukuman from '../../assets/iconHukuman.svg'
import Pangkat from '../../assets/iconPangkat.svg'
import Penugasan from '../../assets/iconPenugasan.svg'
import Pelatihan from '../../assets/iconPelatihan.svg'
import Bahasa from '../../assets/iconBahasa.svg'
import Gaji from '../../assets/iconGaji.svg'
import Penghargaan from '../../assets/iconPenghargaan.svg'

export default class CardMenu extends Component {
  render() {
    return (
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => {
          if (this.props.title!=="Semua") {
            this.props.navigation.navigate(this.props.title); 
          }else{
            this.props.navigation.navigate("Dataku"); 
          }
        }}
        style={ style.cardContainer }>
          <View style={ style.cardWraper }>
            {this.props.title === 'Cuti' ? <Cuti style={style.icon}/> : null}
            {this.props.title === 'Diklat' ? <Diklat style={style.icon}/> : null}
            {this.props.title === 'Jabatan' ? <Jabatan style={style.icon}/> : null}
            {this.props.title === 'Semua' ? <Semua style={style.icon}/> : null}
            {this.props.title === 'Mutasi' ? <Mutasi style={style.icon}/> : null}
            {this.props.title === 'Pendidikan' ? <Pendidikan style={style.icon}/> : null}
            {this.props.title === 'Seminar' ? <Seminar style={style.icon}/> : null}
            {this.props.title === 'Tunjangan' ? <Tunjangan style={style.icon}/> : null}
            {this.props.title === 'Hukuman' ? <Hukuman style={style.icon}/> : null}
            {this.props.title === 'Pangkat' ? <Pangkat style={style.icon}/> : null}
            {this.props.title === 'Penugasan' ? <Penugasan style={style.icon}/> : null}
            {this.props.title === 'Kenaikan Gaji' ? <Gaji style={style.icon}/> : null}
            {this.props.title === 'Kenaikan Pangkat' ? <Pangkat style={style.icon}/> : null}
            {this.props.title === 'Bahasa' ? <Bahasa style={style.icon}/> : null}
            {this.props.title === 'Pelatihan' ? <Pelatihan style={style.icon}/> : null}
            {this.props.title === 'Penghargaan' ? <Penghargaan style={style.icon}/> : null}
          </View>
        <Text numberOfLines={2} style={style.desc}>{this.props.title}</Text>
      </TouchableOpacity>
    )
  }
}
const style = StyleSheet.create({
  icon: {
    paddingHorizontal: 10,
    marginHorizontal:10,
  },
  cardWraper: {  
    justifyContent: 'center',
    flexDirection: 'row',
    margin: 16,
    alignContent: 'center',
    alignSelf: 'stretch',
  },
  cardContainer: {
    width: widthPercentageToDP('25%'),
    alignItems: 'center',
    alignItems:'center',
    justifyContent:'center',
    marginTop: 16,
    marginBottom: 16,
  },
  desc: {
    fontSize:12,
  }
})
  