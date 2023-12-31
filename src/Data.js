 const data = [
    {
        id: 1,
        img: "/Images/Album1.jpg",
        title: "No Pressure",
        category: "Hip-Hop",
        singer: "Sarkodie",
        numSongs:"16",
        dateReleased:"July 30, 2021",
        albumLink: "https://www.youtube.com/watch?v=5g4-Opd_lOE&list=OLAK5uy_kl93D5SwL6kifg5cl5u7Ek7IyVMwqirMo",
        featuredArtist: "Vic Mensa, Kwesi Arthur, Giggs, Harmonize, Wale, Medikal, Darkovibes, Bernel, Oxlade, Cassper Nyovest, MOG Music "
      },
      {
        id: 2,
        img: "/Images/Album2.jpg",
        title: "Renaissance",
        category: "Hip-Hop",
        dateReleased:"July 29, 2022",
        numofSongs:"29",
        albumLink: "https://www.youtube.com/watch?v=b2xLsCo8zmQ&list=PLzrMYyHmLhGA9MJNeIMOPrciPVTbnk48M",
       featuredArtist: "Nova Wav, The-Dream, Symbolyc One, A. G. Cook, Honey Dijon, Beam, Tricky Stewart, BloodPop, Skrillex, Hit-Boy, No I.D., P2J",
        singer: "Beyonce",
      },
      {
        id: 3,
        img: "/Images/Album3.jpg",
        title: "Donda",
        category: "Hip-Hop",
        dateReleased:"August 29, 2021",
        numSongs:"29",
        albumLink: "https://www.youtube.com/watch?v=6_Y6tThuw9I&list=PL8czsbhQP4tvew4t_V2PL-wUMbxIUdz4o",
       featuredArtist: "Syleena Johnson, Francis and the Lights, JAY-Z, Vory, Playboi Carti, Fivio Foreign, The Weeknd, Baby Keem, Travis Scott, Lil Durk, Lil Yachty, Young Thug, Don Toliver, Kid Cudi, Stalone, Tony Williams, Conway The Machine, KayCyy, Westside Gunn, The LOX, Jay Electronica, Swizz Beatz",
        singer: "Kanye West",
      },
      {
        id: 4,
        img: "/Images/Album4.jpg",
        title: "Wind of Revival",
        category: "Gospel",
        dateReleased:"August 17, 2019",
        numSongs:"13",
        albumLink: "https://www.youtube.com/watch?v=djRBxiSvO3k&list=PLqUUbCaeGi8cu3ExTKjK13lKYH4sovLBv",
       featuredArtist: "Akosua Kyerematen, Calvin Hammond, Jonathan Nelson",
        singer: "Joe Mettle",
      },
      {
        id: 5,
        img: "/Images/Album5.webp",
        title: "Names of God",
        category: "Gospel",
        dateReleased:"February 1, 2022",
        numSongs:"14",
        albumLink: "https://www.youtube.com/watch?v=nhxuVxQ-lp0&list=PLh1W_pyLoW3D18fqU8nl83R5HNnTPRbGd",
       featuredArtist: "Ntokozo Mambo, Victoria Orenze, Mr M and Revelation, Ada Ehi, Oyinkan Bazuaye",
        singer: "Nathaniel Bassey",
      },
      {
        id: 6,
        img: "/Images/Album6.jpg",
        title: "Control",
        category: "Afrosounds",
        dateReleased:"September 4, 2019",
        numSongs:"9",
        albumLink: "",
       featuredArtist: "",
        singer: "Gyakie",
      },
      {
        id: 7,
        img: "/Images/Album7.jpg",
        title: "Anloga Junction",
        category: "Afrosounds",
        dateReleased:"April 24, 2020",
        numSongs:"15",
        albumLink: "https://www.youtube.com/watch?v=0wCvpDrYlt4&list=PL7DY_z54rvUpdDric4p5MjQxHRaKWIcHU",
       featuredArtist: "Zlatan, Jahmiel",
        singer: "Stonebwoy",
      },
      {
        id: 8,
        img: "/Images/Album8.jpg",
        title: "Grace",
        category: "Gospel",
        dateReleased:"december 5th, 2021",
        numSongs:"9",
        albumLink: "https://www.youtube.com/watch?v=i0sF0bTgh7M&list=PL34Foz_ZcygD8BFvCKtEuSTSF-0JxLVvu",
       featuredArtist: "",
        singer: "Diana Hamilton",
      },
      {
        id: 9,
        img: "/Images/Album10.png",
        title: "Love,Damini",
        category: "Afrosounds",
        dateReleased:"July 8, 2022",
        numSongs:"19",
        albumLink: "https://www.youtube.com/watch?v=J3rOq9lYjeQ&list=PL_Sc3Kp_QmNYyjuRSZ9q5nbdYdQ39VTZb",
       featuredArtist: "Victony, Popcan, Ed Sheeran, Blxst, Kehlani, J Balvin, Khalid, Ladysmith, J Hus",
        singer: "Burna Boy",
      },
      {
        id: 10,
        img: "/Images/Album11.jpg",
        title: "The Birth of Revival",
        category: "Gospel",
        dateReleased:"January 22, 2023",
        numSongs:"14",
        albumLink: "https://www.youtube.com/watch?v=4vBzvhzTBUQ&list=PLCPSPCE6BJt1F0_fiCxLv37PlqM5P12RO",
       featuredArtist: "Mercy Chinwo",
        singer: "Dunsin Oyekan",
      },
      {
        id: 11,
        img: "/Images/Album12.webp",
        title: "The Golden Boy",
        category: "Afrosounds",
        dateReleased:"June 24, 2021",
        numSongs:"14",
        albumLink: "https://www.youtube.com/watch?v=u1fY6m-xzlw&list=PLL-wgwmfHDmszTTlyMwddrtP5fGEjxJxB",
       featuredArtist: "Joey B, Patoranking, Kuame Eugene",
        singer: "Kidi",
      },
      {
        id: 12,
        img: "/Images/Album13.jpg",
        title: "Son of Africa",
        category: "Afrosounds",
        dateReleased:"October 9, 2020",
        numSongs:"14",
        albumLink: "https://www.youtube.com/watch?v=lsKSAMRi0Ks&list=PLL-wgwmfHDmtQxo3_mFSJKIVPCUhJiOM-",
       featuredArtist: "Falz, Zlatan, Eddy Kenzo, Shata Wale, Samini, DJ Mensah, Sarkodie, Prince Bright, Obaapa Christy",
        singer: "Kuame Eugene",
      },
      {
        id: 13,
        img: "/Images/Album14.jpg",
        title: "People",
        category: "Gospel",
        dateReleased:"April 24, 2020",
        numSongs:"8",
        albumLink: "https://www.youtube.com/watch?v=oQrr25X6G_w&list=PLDcRA1PGeiHvHxcQc2p3OdwKLiUg4v2j4&index=2",
       featuredArtist: "Mali Music, Pastor Mike Todd",
        singer: "Jonathan Mcreynolds",
      },
      {
        id: 14,
        img: "/Images/Album15.webp",
        title: "If Orange was a Place",
        category: "Afrosounds",
        dateReleased:"September 15, 2021",
        numSongs:"5",
        albumLink: "https://www.youtube.com/watch?v=m3IHYOs2pLM&list=PLCppEH1ki5CFlVs_Livo7peTagxl1ToQl",
       featuredArtist: "Brent Faiyaz",
        singer: "Tems",
      },
      {
        id: 15,
        img: "/Images/Album16.webp",
        title: "Made in Lagos",
        category: "Afrosounds",
        dateReleased:"October 30, 2020",
        numSongs:"14",
        albumLink: "https://www.youtube.com/watch?v=qEEsc8j-FVI&list=PLsAk6h4n-dS3wtQOP_huuCDiCj3dnKp4E",
       featuredArtist: "Burna Boy, Skepta, Damian Marley, Ella Mai, H.E.R, Tay Iwar, Projexx, Tems, Terri",
        singer: "Wizkid",
      }
    
];

export default data;
