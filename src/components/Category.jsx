import { FaPizzaSlice, FaHamburger, FaStar } from 'react-icons/fa';
import { GiNoodles, GiChopsticks } from 'react-icons/gi';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Category() {
  return (
    <List>
	    <SLink to="/favorites">
		    <FaStar />
		    <h4>Favorites</h4>
	    </SLink>
      <SLink to="/cuisine/Italian">
        <FaPizzaSlice />
        <h4>Pizza</h4>
      </SLink>
      <SLink to="/cuisine/American">
        <FaHamburger />
        <h4>Burgers</h4>
      </SLink>
      <SLink to="/cuisine/Japanese">
        <GiNoodles />
        <h4>Pasta</h4>
      </SLink>
      <SLink to="/cuisine/Chinese">
        <GiChopsticks />
        <h4>Asian</h4>
      </SLink>
    </List>
  );
}

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 4rem; 
  margin-bottom: 4rem;


`;

const SLink = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-right: 5rem;
  text-decoration: none;
  background: linear-gradient(to right, #232526, #414345);
  width: 6rem;
  height: 6rem;
  cursor: pointer;
  transform: scale(0.8);
  
  /* Hover effect */
  &:hover {
    transform: scale(0.85);
   background: linear-gradient(to right, #E6DADA, #274046); 
  }

  h4 {
    color: white;
    font-size: 1rem;
    margin-top: 0.5rem;
  }

  svg {
    color: white;
    font-size: 2rem;
  }

  &.active {
    background: linear-gradient(to right, #485563, #29323c);
    svg {
      color: white;
    }
    h4 {
      color: white;
    }
  }

`;

export default Category;
