import { AkademikMahasiswa } from "pages/AkademikMahasiswa";
import Dashboard from "pages/Dashboard";
import Settings from "pages/Settings";
import Users from "pages/Users";
import Kurikulum from "pages/Kurikulum";
import Semester from "pages/Semester";
import ManajemenRuang from "pages/ManejemenRuang";
import Dosen from "pages/Dosen";
import ProgramStudi from "pages/ProgramStudi";
import JenisNilai from "pages/JenisNilai";
import PredikatKelulusan from "pages/PredikatKelulusan";
import Jadwal from "pages/Jadwal";
import Pejabat from "pages/Pejabat";
import PejabatPengesah from "pages/Pejabat.Pengesah";
import Presensi from "pages/Presensi"

import { RootProvider } from "./hoc";
import Layout from "./Layout";

const Navigation = [
  {
    "title": "Nama Servis",
    "text": "Dashboard",
    "component": Dashboard,
    "path": "/",
    "icon": "blank",
    "exact": true
  },
  {
    "title": "Nama Servis",
    "text": "Users",
    "component": Users,
    "path": "/users",
    "icon": "blank"
  },
  {
    "title": "Nama Servis",
    "text": "Kurikulum",
    "component": Kurikulum,
    "path": "/kurikulum",
    "icon": ""
  },
  {
    "title": "Nama Servis",
    "text": "Semester",
    "component": Semester,
    "path": "/semester",
    "icon": ""
  },
  {
    "title": "Nama Servis",
    "text": "Manajemen Ruang",
    "component": ManajemenRuang,
    "path": "/manajemen-ruang",
    "icon": ""
  },
  {
    "title": "Nama Servis",
    "text": "Dosen",
    "component": Dosen,
    "path": "/dosen",
    "icon": ""
  },
  {
    "title": "Program Studi",
    "text": "Program Studi",
    "component": ProgramStudi,
    "path": "/program-studi",
    "icon": "book"
  },
  {
    "title": "Jenis Nilai",
    "text": "Jenis Nilai",
    "component": JenisNilai,
    "path": "/jenis-nilai",
    "icon": "blank"
  },
  {
    "title": "Predikat Kelulusan",
    "text": "Predikat Kelulusan",
    "component": PredikatKelulusan,
    "path": "/predikat-kelulusan",
    "icon": "blank"
  },
  {
    "title": "Jadwal",
    "text": "Jadwal",
    "component": Jadwal,
    "path": "/jadwal",
    "icon": "blank"
  },
  {
    "title": "Pejabat",
    "text": "Pejabat",
    "component": Pejabat,
    "path": "/pejabat",
    "icon": "blank"
  },
  {
    "title": "Pejabat Pengesah",
    "text": "Pejabat Pengesah",
    "component": PejabatPengesah,
    "path": "/pejabat-pengesah",
    "icon": "blank"
  },
  {
    "title": "Presensi",
    "text": "Presensi",
    "component": Presensi,
    "path": "/presensi",
    "icon": "blank"
  },
  {
    "title": "Settings",
    "text": "Settings",
    "component": Settings,
    "path": "/settings",
    "icon": "cog"
  },
  {
    "title": "Akademik Kemahasiswaan",
    "text": "Kemahasiswaan",
    "component": AkademikMahasiswa,
    "path": "/akademik-mahasiswa",
    "icon": "user"
  }
]

const Root = () => {
  return (
    <RootProvider navigation={Navigation}>
      <Layout />
    </RootProvider>
  )
}

export default Root;