let ListComments = ({listComData}) => {
    return (
        <ul className="list-group list-group-flush">
            {
                listComData.map((list)=>(
                    <li key={list.id} className="list-group-item">{list.text}

                    </li>
                ))
            }
           
        </ul>
    );
};
export default ListComments;