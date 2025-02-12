
export function creatCard ({color, price, name, }) {
    const elem = document.createElement ("div")
    elem.innerHTML = `
    <div class="sellers-product__card">
                <div class="sellers-product__card-pick ${color}">
                    <div class="sellers-product__card-pick_img">
                        <img class="sellers-product__card-pick_img-product" src="./image/Top_Picks_2.png"
                            alt="Top_Picks_2_Boat kerz 234">
                    </div>
                    <div class="sellers-product__card-pick_descr">
                        <div class="sellers-product__card-pick_descr__name">${name}</div>
                        <div class="sellers-product__card-pick_descr__reviews">
                            <div class="sellers-product__card-pick_descr__reviews-svg">
                                <svg width="17" height="16" viewBox="0 0 17 16" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M8.5 0L10.4084 5.87336L16.584 5.87336L11.5878 9.50329L13.4962 15.3766L8.5 11.7467L3.50383 15.3766L5.41219 9.50329L0.416019 5.87336L6.59163 5.87336L8.5 0Z"
                                        fill="#C00C00" />
                                </svg>
                                <svg width="17" height="16" viewBox="0 0 17 16" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M8.5 0L10.4084 5.87336L16.584 5.87336L11.5878 9.50329L13.4962 15.3766L8.5 11.7467L3.50383 15.3766L5.41219 9.50329L0.416019 5.87336L6.59163 5.87336L8.5 0Z"
                                        fill="#C00C00" />
                                </svg>
                                <svg width="17" height="16" viewBox="0 0 17 16" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M8.5 0L10.4084 5.87336L16.584 5.87336L11.5878 9.50329L13.4962 15.3766L8.5 11.7467L3.50383 15.3766L5.41219 9.50329L0.416019 5.87336L6.59163 5.87336L8.5 0Z"
                                        fill="#C00C00" />
                                </svg>
                                <svg width="17" height="16" viewBox="0 0 17 16" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M8.5 0L10.4084 5.87336L16.584 5.87336L11.5878 9.50329L13.4962 15.3766L8.5 11.7467L3.50383 15.3766L5.41219 9.50329L0.416019 5.87336L6.59163 5.87336L8.5 0Z"
                                        fill="#C00C00" />
                                </svg>
                                <svg width="17" height="16" viewBox="0 0 17 16" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M8.5 0L10.4084 5.87336L16.584 5.87336L11.5878 9.50329L13.4962 15.3766L8.5 11.7467L3.50383 15.3766L5.41219 9.50329L0.416019 5.87336L6.59163 5.87336L8.5 0Z"
                                        fill="#C00C00" />
                                </svg>

                            </div>
                            <div class="sellers-product__card-pick_descr__reviews-text">${review}s</div>
                        </div>
                        <div class="sellers-product__card-pick_descr__price">${price}</div>
                    </div>
                </div>
                <button class="sellers-product__card-button">Add to cart</button>
            </div>
    `
    return elem
}



