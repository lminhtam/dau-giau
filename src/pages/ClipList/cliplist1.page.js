import React from "react";
import "./cliplist1.css";
import FixedButton from "../../shared/fixedButton/fixedBtn";

const infoTitle = [
    {
        title: 'TÊN SERIES 1 LOREM ISPUMMMMMMMM',
        description: 'Vestibulum ornare velit non erat volutpat. Ut vel lorem. Suspendisse dignissim sagittis a, faucibus quis, lacinia ut, magna.',
        link: require('../../assets/images/series1/stream_img 1.png')
    },
    {
        title: 'TÊN SERIES LOREM ISPUMMMMMMMM',
        description: 'Vestibulum ornare velit non erat volutpat. Ut vel lorem. Suspendisse dignissim sagittis a, faucibus quis, lacinia ut, magna.',
        link: require('../../assets/images/series1/stream_img 1.png')
    }
];

const categories = [
    {
        pictureName: ['tree-forest.png'],
        link: require('../../assets/images/series1/tree-forest.png'),
        title: 'NAME OF SERIES CLIP 2 CHAP 1',
        description: 'Vestibulum ornare velit non erat volutpat. Ut vel lorem. Suspendisse dignissim sagittis a, faucibus quis, lacinia ut, magna.',
    },
    {
        pictureName: ['tree-forest.png'],
        link: require('../../assets/images/series1/tree-forest.png'),
        title: 'NAME OF SERIES CLIP 2 CHAP 1',
        description: 'Vestibulum ornare velit non erat volutpat. Ut vel lorem. Suspendisse dignissim sagittis a, faucibus quis, lacinia ut, magna.',
    },
    {
        pictureName: ['tree-forest.png'],
        link: require('../../assets/images/series1/tree-forest.png'),
        title: 'NAME OF SERIES CLIP 2 CHAP 1',
        description: 'Vestibulum ornare velit non erat volutpat. Ut vel lorem. Suspendisse dignissim sagittis a, faucibus quis, lacinia ut, magna.',
    },
    {
        pictureName: ['tree-forest.png'],
        link: require('../../assets/images/series1/tree-forest.png'),
        title: 'NAME OF SERIES CLIP 2 CHAP 1',
        description: 'Vestibulum ornare velit non erat volutpat. Ut vel lorem. Suspendisse dignissim sagittis a, faucibus quis, lacinia ut, magna.',
    },
    {
        pictureName: ['tree-forest.png'],
        link: require('../../assets/images/series1/tree-forest.png'),
        title: 'NAME OF SERIES CLIP 2 CHAP 1',
        description: 'Vestibulum ornare velit non erat volutpat. Ut vel lorem. Suspendisse dignissim sagittis a, faucibus quis, lacinia ut, magna.',
    },
];

function titleSeries(props) {
    return(
        <div className="titleSeries">
            <img 
                className="backgroundTitleSeries"
                src={props.link}
                alt="background"
            />
            <div className="contentTitleSeries">
                <div className="nameTitleSeries">
                    {props.title}
                </div>
                <div className="descriptionTitleSeries">
                    {props.description}
                </div>
                <div className="arrowTitleSeries">
                    <div className="arrowSeries"></div>
                    <div className="lineArrowSeries"></div>
                </div>
            </div>
        </div>
    );
};

function oneCard(props, index) {
    return(
        <div className="oneCard">
            <div className="squareBorderOneCard"></div>
            <img
                className="pictureOneCard"
                src={props[index].link}
                alt={props[index].pictureName}
            />
            <div className="nameTitleOneCard">
                {props[index].title}
            </div>
            <div className="descriptionOneCard">
                {props[index].description}
            </div>
            <div className="arrowOneCard">
                <div className="arrowCard"></div>
                <div className="lineArrowCard"></div>
            </div>
        </div>
    );
}

//Một cardSeries chứa 3 oneCard, lấy data từ categories với index lần lượt là 1, 2, 3
function cardSeries(props, data, index_1, index_2, index_3) { 
    //Không có dữ liệu để hiển thị
    if (data.length - 1 < index_1) {
        return (
            <div className="cardSeries">
            </div>
        );
    }

    //Không có dữ liệu hiển thị cho card_2 và card_3
    else if (data.length - 1 < index_2){
        return(
            <div className="cardSeries">
                <div className="series-1">
                    {props(data, index_1)}
                </div>
            </div>
        );
    }

    //Không có dữ liệu hiển thị cho card_3
    else if (data.length - 1 < index_3){
        return(
            <div className="cardSeries">
                <div className="series-1">
                    {props(data, index_1)}
                </div>
                <div className="series-2">
                    {props(data, index_2)}
                </div>
            </div>
        );
    }

    //Hiển thị đầy đủ 3 card
    else {
        return(
            <div className="cardSeries">
                <div className="series-1">
                    {props(data, index_1)}
                </div>
                <div className="series-2">
                    {props(data, index_2)}
                </div>
                <div className="series-3">
                    {props(data, index_3)}
                </div>
            </div>
        );
    }
};

function ClipList1(){
    return (
        <div className="cliplist1">
            <FixedButton />
            <div className="slide-1">
                {titleSeries(infoTitle[0])}
            </div>
            <div className="slide-2">
                {cardSeries(oneCard, categories, 0, 1, 2)}
            </div>
            <div className="slide-3">
                {titleSeries(infoTitle[1])}
            </div>
            <div className="slide-4">
                {cardSeries(oneCard, categories, 3, 4, 5)}
            </div>
        </div>
    );
}

export default ClipList1;