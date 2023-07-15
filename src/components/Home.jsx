import React  from 'react';

import Search from './Search';
import ImageCarousel from './ImageCarousel';
import DataCard from './DataCard';


export default function Home()
{
    return(
        <>
    <marquee>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, iusto quasi dolorum ipsam fugiat itaque accusantium repudiandae deleniti? Repellendus nostrum fugit voluptatem ab nemo quos excepturi dicta? Amet, consequatur numquam?</marquee>
        <Search/>
        <ImageCarousel/>
<DataCard/>    

    </>
    );
}