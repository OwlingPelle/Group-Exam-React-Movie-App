import './detailsList.css';

const DetailsList = ({ list }) => {
    return (
        <ul className="details__list">
            {list.map((item, index) => {
                return (
                    <li key={index} className="details__item">
                        {item}
                    </li>
                );
            })}
        </ul>
    );
};

export default DetailsList;
