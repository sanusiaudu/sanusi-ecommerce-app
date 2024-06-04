import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../lib/UserSlice";
import styles from "./Testimonial.module.css";
import star from "../assets/stars.svg";

function Testimonial() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  const userStatus = useSelector((state) => state.users.status);
  const error = useSelector((state) => state.users.error);

  useEffect(() => {
    if (userStatus === "idle") {
      dispatch(fetchUsers());
    }
  }, [userStatus, dispatch]);

  const groupUsers = (users, itemsPerGroup) => {
    const groups = [];
    for (let i = 0; i < users.length; i += itemsPerGroup) {
      groups.push(users.slice(i, i + itemsPerGroup));
    }
    return groups;
  };

  const userGroups = groupUsers(users.slice(0, 9), 3);

  return (
    <div className={styles.testimonial}>
      <div className={styles.testimonialContainer}>
        {users.length > 0 && (
          <div className={styles.testimonialContent}>
            <h3>What they say about us</h3>
            <img src={users[5].image} alt="Profile" />
            <div>
                <img  src={star} alt="Star" />
            </div>
            <p>
              Slate helps you see how many more days you need to work to reach
              your financial goal.
            </p>

            <div className={styles.testimonialTitle}>
              <a href="#">{users[0].username}</a>
              <h6>{users[0].company.title}</h6>
            </div>
          </div>
        )}

        <div className={styles.testimonialBody}>
          {userGroups.map((group, index) => (
            <div key={index}>
              {group.map((user, imgIndex) => (
                <img
                  key={imgIndex}
                  src={user.image}
                  alt={`Testimonial ${user.firstName} ${user.lastName}`}
                  width={100}
                  height={100}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
      {error && <div>{error}</div>}
    </div>
  );
}

export default Testimonial;
