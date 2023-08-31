import React from "react";

function About() {
  return (
    <div className="mx-14 h-screen flex flex-col justify-center gap-10">
      <p>About Us</p>
      <div className="flex gap-36">
        <strong>
          Visi kami adalah menghubungkan bisnis dengan bakat dan meningkatkan
          taraf hidup melalui karier yang lebih baik.
        </strong>
        <p>
          Kami adalah salah satu perusahaan penyedia informasi lowongan
          pekerjaan terkemuka di Asia. Kami berperan sebagai fasilitator
          pencocokan dan komunikasi lapangan kerja antara pencari kerja dan
          perusahaan, di Malaysia, Filipina, Singapura, Indonesia dan Vietnam.
        </p>
      </div>
      <div className="bg-[url('assets/about-map.png')] h-full bg-cover">
      </div>
      <div>
        <p className="mb-7">
          Didirikan di Malaysia pada tahun 1997, JobStreet.com saat ini memiliki
          800 tim yang handal juga berbakat, dan tumbuh begitu kuat disetiap
          negara dimana kami beroperasi.
        </p>
      <p className="mb-7">
        Dengan pemahaman dan wawasan yang kami miliki disetiap pasar, serta
        semangat kami bagi dunia teknologi, kami menyediakan peluang terbaik
        bagi para pencari kerja dan memberikan nilai luar biasa bagi para
        perusahaan.
      </p>
      <p className="mb-7">
        Pada November 2014, kami telah menjadi bagian dari Bursa Efek Australia
        dan terdaftar sebagai SEEK Limited – perusahaan penyedia informasi
        lowongan pekerjaan terbesar didunia dengan kapitalisasi pasar. Sebagai
        bagian dari keluarga SEEK, kami menggunakan produk kelas dunia untuk
        mempertemukan para pencari kerja dengan perusahaan terkemuka diseluruh
        wilayah.
      </p>
      <p className="mb-7">
        Kami berkomitmen untuk terus meningkatkan nilai yang kami berikan kepada
        pencari kerja dan perusahaan. Untuk memenuhi hal ini, kami terus
        mengembangkan produk dan layanan kami agar pencocokan antara pencari
        kerja dan perusahaan menjadi lebih mudah.
      </p>
      </div>
    </div>
  );
}

export default About;
