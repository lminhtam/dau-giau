import React from "react";
import "./listvideo.css";
import FixedButton from "../../shared/fixedButton/fixedBtn";
import videoURL from "../../assets/videos/INTRO MAT (Formal ver).mp4"


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

function oneCard(props, index) {
    return (
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
    else if (data.length - 1 < index_2) {
        return (
            <div className="cardSeries">
                <div className="series-1">
                    {props(data, index_1)}
                </div>
            </div>
        );
    }

    //Không có dữ liệu hiển thị cho card_3
    else if (data.length - 1 < index_3) {
        return (
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
        return (
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

const titleChapter = [
    {1: "TÊN CHAPTER"},
    {2: "TÊN NÀO ĐÓ"}
];

function ListVideo() {
    return (
        <div className="listVideo">
            <FixedButton/>
            <div className="video">
                <video 
                    controls 
                    autoPlay 
                    src={videoURL} 
                    type="video/mp4"
                    width="1520px"
                    height="860px"
                    justify-content="space-around"
                />
            </div>
            <div className="Chapter">
                <h1 className="nameChapter">
                    CHAPTER 1 - <b>{titleChapter[0][1]}</b>
                </h1>
                <div className="lineChapter"></div>
            </div>
            <div className="section">
                <h2 className="sectionName">DANH SÁCH TẬP</h2>
                <div className="categories">
                    {cardSeries(oneCard, categories, 0, 1, 2)}
                </div>
            </div>
        </div>
    );
}

export default ListVideo;