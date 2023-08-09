import axios from "axios";

const baru = {
    namespaced: true,
    state: {
        baruData: [],
    },
    getters: {
        getBaru: (state) => state.baruData,
    },
    actions: {
        async fetchBaru({ commit }) {
            try {
                const data = await axios.get(
                    "https://al-quran-8d642.firebaseio.com/data.json?print=pretty"
                );
                commit("SET_BARU", data.data);
            } catch (error) {
                alert (error);
                console.log(error)
            }
        },
    },
    mutations: {
        SET_BARU(state, baru) {
            state.baruData = baru
        }
    }
}

export default baru