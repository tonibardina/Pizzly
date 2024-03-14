export const Logo: React.FC<{ fill: string; size: number }> = ({ fill, size }) => {
    return (
        <svg width={size} height={size} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M11.2715 8.70192C12.7024 8.70192 13.2838 8.9307 13.2838 9.59735C12.9499 9.9313 11.2715 9.66192 11.2715 8.70192ZM10.6667 20.0146C10.6467 20.0146 10.6271 20.0143 10.6074 20.0143C9.26678 16.2845 11.6996 12.5139 15.5996 12.5139C17.651 12.5139 18.3936 10.1651 18.277 9.04042C18.2657 8.95289 18.1956 8.88883 18.1138 8.88883L14.2703 8.88328C14.204 8.88302 14.1407 8.85402 14.0978 8.80307L13.702 8.33719C13.5083 8.10892 13.2291 7.9712 12.9302 7.95632L12.1606 7.91798C12.0633 7.91294 11.9818 7.84483 11.9553 7.751C11.6304 6.5925 10.9918 5.66908 10.4747 5.23448C10.4404 5.20572 10.3879 5.21985 10.3678 5.25995C10.0943 5.80074 9.88449 6.33396 9.77578 6.96328C9.76746 7.01121 9.70415 7.01121 9.67943 6.96303C9.22213 6.07517 8.63266 5.23877 8.02352 4.63114C7.99325 4.60112 7.94407 4.6044 7.91859 4.6387C7.39319 5.34924 6.74924 6.58392 6.637 8.85074C6.63221 8.95138 6.56335 9.03613 6.46573 9.06085C5.47799 9.31207 4.14645 10.0302 3.68789 10.2872C3.58372 10.3455 3.60314 10.3876 3.69092 10.3977C3.77844 10.4075 5.22727 10.5594 5.29058 10.5659C5.35389 10.5727 5.37937 10.6242 5.30042 10.6534C4.52026 10.9438 2.92438 11.9577 2.43354 12.2745C2.34021 12.3348 2.39974 12.3742 2.45221 12.3777C2.50467 12.3812 4.19312 12.4584 4.27005 12.462C4.34698 12.4655 4.38582 12.5323 4.28745 12.5649C4.23347 12.583 2.93321 13.0814 1.76613 13.5299C1.47632 12.6274 1.31943 11.6657 1.31943 10.6673C1.31943 5.50513 5.50422 1.32033 10.6667 1.32033C15.8289 1.32033 20.0139 5.50513 20.0139 10.6673C20.0139 15.8298 15.8289 20.0146 10.6667 20.0146ZM10.6667 0.000650406C4.78511 0.000650406 0 4.78576 0 10.6673C0 16.5489 4.78511 21.334 10.6667 21.334C16.5482 21.334 21.3333 16.5489 21.3333 10.6673C21.3333 4.78576 16.5482 0.000650406 10.6667 0.000650406Z"
                fill={fill}
            />
        </svg>
    );
};