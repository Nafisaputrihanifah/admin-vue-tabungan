import { createRouter, createWebHistory } from 'vue-router'

function cekToken(to, from, next) {
  if (!!localStorage.getItem('token') && localStorage.getItem('token') != 'undefined') {
    next()
  } else {
    alert('Mohon login terlebih dahulu!')
    next('/login')
  }
};
function CekProfil(to, from, next) {
  if (!!localStorage.getItem('token') && localStorage.getItem('token') != 'undefined') {
    next()
  } else {
    next('/')
  }
};



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Login',
      component: () => import('../views/LoginView.vue'),
    },
    {
      path: '/admin/dashboard',
      name: 'Dashboard',
      component: () => import('../views/Admin/indexView.vue'),
    },
    {
      path: '/admin/siswa',
      name: 'Siswa',
      component: () => import('../views/Admin/siswa/indexView.vue'),
    },
    {
      path: '/admin/siswa/create',
      name: 'SiswaCreate',
      component: () => import('../views/Admin/siswa/CreateView.vue'),
    },
    {
      path: '/admin/riwayat_tabungan',
      name: 'RiwayatTabungan',
      component: () => import('../views/Admin/riwayat_tabungan/IndexView.vue'),
    },
    {
      path: '/admin/siswa/tabungan/:id',
      name: 'RiwayatTabunganSiswa',
      component: () => import('../views/Admin/tabungan_siswa/IndexView.vue'),
      props:true
    },
    {
      path: '/admin/siswa/detail/:id',
      name: 'Siswadetail',
      component: () => import('../views/Admin/siswa/DetailView.vue'),
      props:true
    },
    {
      path: '/admin/siswa/edit/:id',
      name: 'SiswaEdit',
      component: () => import('../views/Admin/siswa/EditView.vue'),
      props:true
    },
  ]
});

export default router
