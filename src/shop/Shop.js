import '../App.css';
import ShopItem from './ShopItem';

const styles = {
  ul: {
    listStyle: 'none',
    margin: 0,
    padding: 0
  }
}

function Shop(props) {
  return (
    <ul style={styles.ul} >
      { props.shops.map(shop => {
        return <ShopItem shop={shop} key={shop.id}/>
      })}
    </ul>
  );
}

export default Shop;
