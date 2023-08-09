<template>
    <div class="container mx-auto sm:px-4">
        <h1 class="text-center b">Al-Quran</h1>
        <table class="table-auto m-14">
            <thead>
                <tr>
                    <th class="px-4 py-2">Nama Surah</th>
                    <th class="px-4 py-2">Arti</th>
                    <th class="px-4 py-2">Jenis Surat</th>   
                    <th class="px-4 py-2">Ayat</th>       
                </tr>
            </thead>
            <tbody>
                <tr v-for="baru in getBaru" :key="baru.nomor">
                    <td class="border px-4  py-2"> {{ baru.nama }} </td>
                    <td class="border px-4  py-2"> {{ baru.arti }} </td>
                    <td class="border px-4  py-2"> {{ baru.type }} </td>
                    <td class="border px-4  py-2"> {{ baru.ayat }} </td>
    
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    computed: {
        ...mapGetters('baru', ['getBaru']),
    },
    methods: {
        ...mapActions('baru', ['fetchBaru'])
    },
    created() {
        this.fetchBaru();
    },
}
</script>