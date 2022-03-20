function CartIcon({width = '25px', height = '25px'}) {
    return (
        <svg className="my-cart-icon" width={width} height={height} viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.08 4.00059C18.9072 3.70121 18.6598 3.45172 18.3618 3.27646C18.0639 3.1012 17.7256 3.00615 17.38 3.00059H4.58L4 0.740587C3.9414 0.522425 3.81066 0.330531 3.62908 0.196158C3.44749 0.0617862 3.22576 -0.00714676 3 0.00058648H1C0.734784 0.00058648 0.48043 0.105943 0.292893 0.29348C0.105357 0.481016 0 0.73537 0 1.00059C0 1.2658 0.105357 1.52016 0.292893 1.70769C0.48043 1.89523 0.734784 2.00059 1 2.00059H2.24L5 12.2606C5.0586 12.4787 5.18934 12.6706 5.37092 12.805C5.55251 12.9394 5.77424 13.0083 6 13.0006H15C15.1847 13 15.3656 12.9483 15.5227 12.8513C15.6798 12.7542 15.8069 12.6155 15.89 12.4506L19.17 5.89059C19.3122 5.5926 19.3783 5.26406 19.3626 4.93427C19.3469 4.60448 19.2498 4.28371 19.08 4.00059ZM14.38 11.0006H6.76L5.13 5.00059H17.38L14.38 11.0006Z" fill="white"/>
            <path d="M5.5 18.0006C6.32843 18.0006 7 17.329 7 16.5006C7 15.6722 6.32843 15.0006 5.5 15.0006C4.67157 15.0006 4 15.6722 4 16.5006C4 17.329 4.67157 18.0006 5.5 18.0006Z" fill="white"/>
            <path d="M15.5 18.0006C16.3284 18.0006 17 17.329 17 16.5006C17 15.6722 16.3284 15.0006 15.5 15.0006C14.6716 15.0006 14 15.6722 14 16.5006C14 17.329 14.6716 18.0006 15.5 18.0006Z" fill="white"/>
        </svg>
    )
}

export default CartIcon