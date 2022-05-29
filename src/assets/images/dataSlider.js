import { v4 as uuidv4 } from 'uuid';
import img1 from './img1.webp';
import img2 from './img2.webp';
import img3 from './img3.webp';
import img4 from './img4.webp';
import img5 from './img5.webp';
import img6 from './img6.jpg';




const dataSlider = [
    {
        id: uuidv4(),
        img: img1,
        title: 'First'
    },
    {
        id: uuidv4(),
        img: img2,
        title: 'Second'
    },
    {
        id: uuidv4(),
        img: img3,
        title: 'Three'
    },
    {
        id: uuidv4(),
        img: img4,
        title: 'Four'
    },
    {
        id: uuidv4(),
        img: img5,
        title: 'Five'
    },
    {
        id: uuidv4(),
        img: img6,
        title: 'Six'
    },
]

export default dataSlider;