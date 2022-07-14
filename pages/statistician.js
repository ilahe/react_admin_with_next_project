import {Charts, Charts2} from "../svg/";
import {Container} from "@material-ui/core";

const Statistician = () => {
    return (
        <div>
            <div className="statistician">
                <div className="card_container">
                    <div className="card-left">
                        <div className="card_header">
                            <h3 className="a-widget-title">
                                <a href="a">Объявления</a>
                            </h3>
                            <hr/>
                        </div>
                        <div className="a-statistic-widget-top">
                            <div className="a-statistic-widget-top-chart">
                                <Charts/>
                            </div>
                            <div className="a-statistic-widget-top-list">
                                <div className="a-statistic-type-item">
                                    <div className="a-statistic-text">
                                        <div
                                            className="a-widget-dot"
                                            style={{backgroundColor: "#74b31b"}}
                                        >
                                        </div>
                                        <a className="a-section-type">Опубликовано</a>
                                    </div>
                                    <p>278</p>
                                </div>
                                <div className="a-statistic-type-item">
                                    <div className="a-statistic-text">
                                        <div
                                            className="a-widget-dot"
                                            style={{backgroundColor: "#ffcd33"}}
                                        >
                                        </div>
                                        <a className="a-section-type">На модерации</a>
                                    </div>
                                    <p>1267</p>
                                </div>
                                <div className="a-statistic-type-item">
                                    <div className="a-statistic-text">
                                        <div
                                            className="a-widget-dot"
                                            style={{backgroundColor: "#E5625C"}}
                                        >
                                        </div>
                                        <a className="a-section-type">Снято с публикации</a>
                                    </div>
                                    <p>456</p>
                                </div>
                                <div className="a-statistic-type-item">
                                    <div className="a-statistic-text">
                                        <div
                                            className="a-widget-dot"
                                            style={{backgroundColor: "#23b7e5"}}
                                        >
                                        </div>
                                        <a className="a-section-type">Не активировано</a>
                                    </div>
                                    <p>127</p>
                                </div>
                                <div className="a-statistic-type-item">
                                    <div className="a-statistic-text">
                                        <div
                                            className="a-widget-dot"
                                            style={{backgroundColor: "#9b48cd"}}
                                        >
                                        </div>
                                        <a className="a-section-type">Заблокировано</a>
                                    </div>
                                    <p>145</p>
                                </div>
                                <div className="a-statistic-type-item">
                                    <div className="a-statistic-text">
                                        <div
                                            className="a-widget-dot"
                                            style={{backgroundColor: "#e04545"}}
                                        >
                                        </div>
                                        <a className="a-section-type">Удалено</a>
                                    </div>
                                    <p>10</p>
                                </div>
                            </div>
                        </div>
                        <div className="a-statistic-widget-bottom-j-chart-bl">
                            <div className="a-statistic-widget-top">
                                <div className="a-statistic-widget-top-chart">
                                    <Charts2/>
                                </div>
                                <div className="a-statistic-widget-top-list">
                                    <div className="a-statistic-type-item">
                                        <div className="a-statistic-text">
                                            <div
                                                className="a-widget-dot"
                                                style={{backgroundColor: "#74b31b"}}
                                            >
                                            </div>
                                            <a className="a-section-type">Опубликовано</a>
                                        </div>
                                        <p>2455</p>
                                    </div>
                                    <div className="a-statistic-type-item">
                                        <div className="a-statistic-text">
                                            <div
                                                className="a-widget-dot"
                                                style={{backgroundColor: "#ffcd33"}}
                                            >
                                            </div>
                                            <a className="a-section-type">На модерации</a>
                                        </div>
                                        <p>225</p>
                                    </div>
                                    <div className="a-statistic-type-item">
                                        <div className="a-statistic-text">
                                            <div
                                                className="a-widget-dot"
                                                style={{backgroundColor: "#E5625C"}}
                                            >
                                            </div>
                                            <a className="a-section-type">Снято с публикации</a>
                                        </div>
                                        <p>11</p>
                                    </div>
                                    <div className="a-statistic-type-item">
                                        <div className="a-statistic-text">
                                            <div
                                                className="a-widget-dot"
                                                style={{backgroundColor: "#23b7e5"}}
                                            >
                                            </div>
                                            <a className="a-section-type">Не активировано</a>
                                        </div>
                                        <p>789</p>
                                    </div>
                                    <div className="a-statistic-type-item">
                                        <div className="a-statistic-text">
                                            <div
                                                className="a-widget-dot"
                                                style={{backgroundColor: "#9b48cd"}}
                                            >
                                            </div>
                                            <a className="a-section-type">Заблокировано</a>
                                        </div>
                                        <p>127</p>
                                    </div>
                                    <div className="a-statistic-type-item">
                                        <div className="a-statistic-text">
                                            <div
                                                className="a-widget-dot"
                                                style={{backgroundColor: "#e04545"}}
                                            ></div>
                                            <a className="a-section-type">Удалено</a>
                                        </div>
                                        <p>127</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-right">
                        <div className="card_header">
                            <h3 className="a-widget-title">
                                <a href="a">Пользователи</a>
                            </h3>
                            <hr/>
                        </div>
                        <div className="a-statistic-widget-top">
                            <div className="a-statistic-widget-top-chart">
                                <Charts/>
                            </div>
                            <div className="a-statistic-widget-top-list">
                                <div className="a-statistic-type-item">
                                    <div className="a-statistic-text">
                                        <div
                                            className="a-widget-dot"
                                            style={{backgroundColor: "#74b31b"}}
                                        ></div>
                                        <a className="a-section-type">Опубликовано</a>
                                    </div>
                                    <p>278</p>
                                </div>
                                <div className="a-statistic-type-item">
                                    <div className="a-statistic-text">
                                        <div
                                            className="a-widget-dot"
                                            style={{backgroundColor: "#ffcd33"}}
                                        ></div>
                                        <a className="a-section-type">На модерации</a>
                                    </div>
                                    <p>1267</p>
                                </div>
                                <div className="a-statistic-type-item">
                                    <div className="a-statistic-text">
                                        <div
                                            className="a-widget-dot"
                                            style={{backgroundColor: "#E5625C"}}
                                        ></div>
                                        <a className="a-section-type">Снято с публикации</a>
                                    </div>
                                    <p>456</p>
                                </div>
                                <div className="a-statistic-type-item">
                                    <div className="a-statistic-text">
                                        <div
                                            className="a-widget-dot"
                                            style={{backgroundColor: "#23b7e5"}}
                                        ></div>
                                        <a className="a-section-type">Не активировано</a>
                                    </div>
                                    <p>127</p>
                                </div>
                                <div className="a-statistic-type-item">
                                    <div className="a-statistic-text">
                                        <div
                                            className="a-widget-dot"
                                            style={{backgroundColor: "#9b48cd"}}
                                        ></div>
                                        <a className="a-section-type">Заблокировано</a>
                                    </div>
                                    <p>145</p>
                                </div>
                                <div className="a-statistic-type-item">
                                    <div className="a-statistic-text">
                                        <div
                                            className="a-widget-dot"
                                            style={{backgroundColor: "#e04545"}}
                                        ></div>
                                        <a className="a-section-type">Удалено</a>
                                    </div>
                                    <p>10</p>
                                </div>
                            </div>
                        </div>
                        <div className="a-statistic-widget-bottom-j-chart-bl">
                            <div className="a-statistic-widget-top">
                                <div className="a-statistic-widget-top-chart">
                                    <Charts2/>
                                </div>
                                <div className="a-statistic-widget-top-list">
                                    <div className="a-statistic-type-item">
                                        <div className="a-statistic-text">
                                            <div
                                                className="a-widget-dot"
                                                style={{backgroundColor: "#74b31b"}}
                                            ></div>
                                            <a className="a-section-type">Опубликовано</a>
                                        </div>
                                        <p>2455</p>
                                    </div>
                                    <div className="a-statistic-type-item">
                                        <div className="a-statistic-text">
                                            <div
                                                className="a-widget-dot"
                                                style={{backgroundColor: "#ffcd33"}}
                                            ></div>
                                            <a className="a-section-type">На модерации</a>
                                        </div>
                                        <p>225</p>
                                    </div>
                                    <div className="a-statistic-type-item">
                                        <div className="a-statistic-text">
                                            <div
                                                className="a-widget-dot"
                                                style={{backgroundColor: "#E5625C"}}
                                            ></div>
                                            <a className="a-section-type">Снято с публикации</a>
                                        </div>
                                        <p>11</p>
                                    </div>
                                    <div className="a-statistic-type-item">
                                        <div className="a-statistic-text">
                                            <div
                                                className="a-widget-dot"
                                                style={{backgroundColor: "#23b7e5"}}
                                            ></div>
                                            <a className="a-section-type">Не активировано</a>
                                        </div>
                                        <p>789</p>
                                    </div>
                                    <div className="a-statistic-type-item">
                                        <div className="a-statistic-text">
                                            <div
                                                className="a-widget-dot"
                                                style={{backgroundColor: "#9b48cd"}}
                                            ></div>
                                            <a className="a-section-type">Заблокировано</a>
                                        </div>
                                        <p>127</p>
                                    </div>
                                    <div className="a-statistic-type-item">
                                        <div className="a-statistic-text">
                                            <div
                                                className="a-widget-dot"
                                                style={{backgroundColor: "#e04545"}}
                                            ></div>
                                            <a className="a-section-type">Удалено</a>
                                        </div>
                                        <p>127</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Statistician;
