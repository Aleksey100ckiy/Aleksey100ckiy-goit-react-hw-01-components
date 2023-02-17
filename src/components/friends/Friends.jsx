import clsx from "clsx";
import PropTypes from 'prop-types';
import css from 'components/friends/Friends.module.css';

export const Friends = ({ friendsList }) => {
    return <ul className={css.friendList}>
                {friendsList.map(friend => (
                    <li key={friend.name} className={css.item}>
                        <span className={clsx({
                            [css.statusOnline]: friend.isOnline === true,
                            [css.statusOffline]: friend.isOnline === false,
                        })} ></span>
                    <img className={css.avatar} src={friend.avatar} alt={friend.name} width="48" />
                    <p className={css.name}>{friend.name}</p>
                </li>))}
            </ul>
    
}

Friends.propTypes = {
    friendsList: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            avatar: PropTypes.string.isRequired,
            id: PropTypes.number.isRequired,
            isOnline: PropTypes.bool.isRequired,
        })
    )
}