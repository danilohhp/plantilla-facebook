import { useState, useEffect } from "react";
import CommentForm from "./commentform";
import ListComments from "./listcommnets";

let Post = () => {
    let [likes, setlike] = useState(0);
    let [btncomment, setBtncomment] = useState(false);
    let isShowcommnet = () => setBtncomment(!btncomment);

    let [textComment, setTextComment] = useState("");
    let getCommentData = (comment) => {
        setTextComment(comment);
    };
    let ListCom = [
        { id: 1, text: "pasame la receta" },
        { id: 2, text: "estaba muy rico" },
    ];

    let nextID = 3;
    let [id, setid] = useState(nextID);
    let [lisData, setlistData] = useState(ListCom);

    useEffect(() => {
        if (textComment) {
            setlistData((prevListData) => [
                ...prevListData,
                { id: id, text: textComment },
            ]);
            setid((prevId) => prevId + 1);
            setTextComment("");
        }
    }, [textComment, id, setlistData, setid]);

    return (
        <div className="card" style={{ width: "18rem" }}>
            <div className="card-body">
                <h5 className="card-title">Postre De Arandanos</h5>
                <p className="card-text">
                    Ingredientes: leche condensada, arandanos, crema de leche, aceite vegetal, huevos.
                </p>
                <img
                    src={
                        "https://www.revistapancaliente.co/wp-content/uploads/2024/09/Por-que-comemos-postres.jpg"
                    }
                    className="card-img-top"
                    alt="..."
                />
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-around">
                    <span>
                        👍🤣❤ {likes} <samp> </samp>
                        {lisData.length}🗨
                    </span>
                </li>
                <li className="list-group-item d-flex justify-content-around">
                    <button className="btn btn-secondary" onClick={() => setlike(likes + 1)}>
                        👍 Like
                    </button>{" "}
                    <button className="btn btn-secondary" onClick={isShowcommnet}>
                        🗨 Comment
                    </button>
                </li>
            </ul>
            <div className="card-footer">
                {btncomment && <CommentForm getCommentData={getCommentData} />}
            </div>
            <ListComments listComData={lisData} />
        </div>
    );
};
export default Post;