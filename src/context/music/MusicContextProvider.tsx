import React, { FC, ReactNode, useState } from "react";
import MusicContext from "./MusicContext";

interface MusicContextProviderProps {
  children: ReactNode;
}

const MusicContextProvider: FC<MusicContextProviderProps> = ({ children }) => {
  const musicData = [
    {
      image: "https://i.ytimg.com/vi/Z_59mqgPvlU/sddefault.jpg",
      music: "audio/Bhajan Mashup 2  Jigardan Gadhavi  Jigrra.mp3",
      title: "Bhajan Mashup 2  Jigardan Gadhavi  Jigrra",
    },
    {
      image: "https://i.ytimg.com/vi/JeN1Ixi3DHI/maxresdefault.jpg",
      music:
        "audio/Charan Kanya  Swarotsav 2019  Live  Yogesh Gadhvi  Aditya Gadhvi  Ahmedabad.mp3",
      title:
        "Charan Kanya  Swarotsav 2019  Live  Yogesh Gadhvi  Aditya Gadhvi  Ahmedabad",
    },
    {
      image: "https://i.ytimg.com/vi/46f6aPSXN7Y/maxresdefault.jpg",
      music:
        "audio/ Halaji Tar Hath Vakhanu  હલજ તર  Aditya Gadhavi New Song  Instagram Reels Viral Song garba.mp3",
      title:
        " Halaji Tar Hath Vakhanu  હલજ તર  Aditya Gadhavi New Song  Instagram Reels Viral Song garba",
    },
    {
      image: "https://i.ytimg.com/vi/yo01AKeQXiI/maxresdefault.jpg",
      music:
        "audio/ Nanpan No Nedlo LoFi Mix  Mahesh Vanzara  Gracy Chauhan  HD Video  R Square  Jigar Studio.mp3",
      title:
        " Nanpan No Nedlo LoFi Mix  Mahesh Vanzara  Gracy Chauhan  HD Video  R Square  Jigar Studio",
    },
    {
      image: "https://i.ytimg.com/vi/VeiUQrYrg_s/maxresdefault.jpg",
      music:
        "audio/Odhaji By Jigardan Gadhavi  ઓધજ  જગરદન ગઢવ  Priya Saraiya  Tips Originals.mp3",
      title:
        "Odhaji By Jigardan Gadhavi  ઓધજ  જગરદન ગઢવ  Priya Saraiya  Tips Originals",
    },
    {
      image: "https://i.ytimg.com/vi/yYWlZz-jW9Q/maxresdefault.jpg",
      music:
        "audio/Ram Siya Ram LYRICS  Adipurush  Prabhas  SachetParampara Manoj Muntashir S  Om Raut.mp3",
      title:
        "Ram Siya Ram LYRICS  Adipurush  Prabhas  SachetParampara Manoj Muntashir S  Om Raut",
    },
    {
      image: "https://i.ytimg.com/vi/llZu57g7v_g/hqdefault.jpg ",
      music: "audio/ ભજન વન મર ભખ નઈ ભગ  Aditya Gadhvi.mp3",
      title: " ભજન વન મર ભખ નઈ ભગ  Aditya Gadhvi",
    },
    {
      image:
        "https://a10.gaanacdn.com/images/albums/34/6952534/crop_480x480_6952534.jpg",
      music:
        "audio/Hanuman Chalisa Symphony Version  3D Video  हनमन चलस  Aditya Gadhvi  Rahul M With Lyrics.mp3",
      title:
        "Hanuman Chalisa Symphony Version  3D Video  हनमन चलस  Aditya Gadhvi  Rahul M With Lyrics",
    },
    {
      image: "https://i.ytimg.com/vi/n6Ue93Sb27Q/maxresdefault.jpg",
      music:
        "audio/Saybo Re Govaliyo and other Gujarati Folk Song by Kirtidan Gadhvi  Gujarati Jalso 2017.mp3",
      title:
        "Saybo Re Govaliyo and other Gujarati Folk Song by Kirtidan Gadhvi  Gujarati Jalso 2017",
    },
    {
      image: "https://i.ytimg.com/vi/5CiAOwE2hfw/maxresdefault.jpg",
      music:
        "audio/Zini Zini Moraliyu  ઝણ ઝણ મરલય  Rangtaali  3  Aditya Gadhavi  Krishna Raas.mp3",
      title:
        "Zini Zini Moraliyu  ઝણ ઝણ મરલય  Rangtaali  3  Aditya Gadhavi  Krishna Raas",
    },
    {
      image: "https://i.ytimg.com/vi/JFS5z_YvR0g/maxresdefault.jpg",
      music:
        "audio/ચદ ઊગય ચકમ ઘયલ  Kirtidan Gadhvi  new popular gujarati song 2022  Live Dayro Balagam 2022.mp3",
      title:
        "ચદ ઊગય ચકમ ઘયલ  Kirtidan Gadhvi  new popular gujarati song 2022  Live Dayro Balagam 2022",
    },
    {
      image: "https://i.ytimg.com/vi/iraezTzB938/maxresdefault.jpg",
      music:
        "audio/Naagar Nandji Na Laal  Aditya Gadhvi  Ft Kinjal Rajpriya.mp3",
      title: "Naagar Nandji Na Laal  Aditya Gadhvi  Ft Kinjal Rajpriya",
    },
    {
      image:
        "https://c.saavncdn.com/397/Har-Har-Mahadev-From-OMG-2-Hindi-2023-20230728145121-500x500.jpg",
      music: "audio/music1.mp3",
      title: "Har Har Mahadev Omg 2",
    },
    {
      image:
        "https://timesofindia.indiatimes.com/photo/msid-101367483,imgsize-129480.cms",
      music: "audio/music2.mp3",
      title: "Khairiyat Gadar 2 ",
    },
    {
      image: "https://i.ytimg.com/vi/N3jsiWMj9CU/maxresdefault.jpg",
      music: "audio/music3.mp3",
      title: " Oonchi Oonchi Waadi Omg 2",
    },
    {
      image:
        "https://c.saavncdn.com/298/Tumhe-Kitna-Pyaar-Karte-From-Bawaal-Hindi-2023-20230707032926-500x500.jpg",
      music: "audio/music4.mp3",
      title: "Tumhe Kitna Pyaar Karte Bawaal ",
    },
    {
      image: "https://i.ytimg.com/vi/LGVsiasNvog/maxresdefault.jpg",
      music: "audio/music5.mp3",
      title: "Ve Kamleya Rocky Aur Rani Kii Prem Kahaani   ",
    },
    {
      image: "https://i.ytimg.com/vi/87JIOAX3njM/maxresdefault.jpg",
      music: "audio/music6.mp3",
      title: "   What Jhumka Rocky Aur Rani Kii Prem Kahaani",
    },
  ];
  const [index, setIndex] = useState(0);
  const startIndexHandler = (i: number) => {
    setIndex(i);
  };

  const nextHandlerleft = () => {
    setIndex(index - Number(1));
    if(index <= 0){
      setIndex(musicData.length  - 1);
    }
  };

  const nextHandlerRight = () => {
      setIndex(index + Number(1));
      if (index >= musicData.length  - 1){
        setIndex(0);
      }
  };

  const contextValue = {
    musicData,
    index,
    startIndexHandler,
    nextHandlerleft,
    nextHandlerRight
  };
  
  return (
    <MusicContext.Provider value={contextValue}>
      {children}
    </MusicContext.Provider>
  );
};

export default MusicContextProvider;
