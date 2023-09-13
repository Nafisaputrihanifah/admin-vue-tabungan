import { createStore } from "vuex";
import navbar from "./modules/navbar";
import siswa from "./modules/siswa";
import tabungan from "./modules/tabungan";
import createPersistedState from "vuex-persistedstate";


export default createStore({
    modules: {
        navbar,
        siswa,
        tabungan
    },
    plugins: [createPersistedState()],
});