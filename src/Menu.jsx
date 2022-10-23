export default function Menu({ items }){
    return (
      <div className="section-center">
        {items.map((menuItem) => {
          return (
            <article key={menuItem.id} className="menu-item">
              <img src={menuItem.imgSrc} alt={menuItem.name} className="photo" />
              <div className="item-info">
                <header>
                  <h4>{menuItem.name}</h4>
                  <h4 className="price">${menuItem.price}</h4>
                </header>
                <p className="item-text">{menuItem.desc}</p>
              </div>
            </article>
          );
        })}
      </div>
    );
  };
  