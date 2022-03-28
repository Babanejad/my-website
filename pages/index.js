import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <Head>
      <title> سامان بابانژاد - برنامه نویس و توسعه دهنده وب</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta property="og:title" content="سامان بابانژاد - برنامه نویس و توسعه دهنده وب" key="title" />
      <meta name="keywords" content="asp.net core,nodejs,reactjs,nextjs,tailwindcss,saman babanezhad,saman babanejad" />
      <meta name="description" content="جهت ارتباط و مشاوره 09147075090" />
    </Head>
      <div className="flex flex-col w-screen">
        <div className="flex justify-center items-center mt-5 box-border overflow-x-hidden">
          <img
            src="./image/saman.jpg"
            className="rounded-full w-1/2 xl:w-60"
            alt="سامان بابانژاد"
          />
        </div>
        <div className="text-center mt-2">
          <p className="text-lg">سامان بابانژاد</p>
          <p className="text-base capitalize">saman babanezhad</p>
        </div>
        <span className="border-t-2 w-1/2 xl:w-2/6 mx-auto my-4"></span>
        <span className="bg-gray-200 flex justify-center border rounded-tr-lg rounded-tl-lg w-2/6 xl:w-1/6 h-8 mx-auto text-center">
          <svg
            className="w-4 h-4 ml-1 my-auto"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            ></path>
          </svg>
          <span className="text-sm my-auto">درباره من</span>
        </span>
        <div className="bg-gray-100  p-4 mx-3 xl:mx-auto  h-full border shadow-lg rounded-md xl:w-6/12 hover:shadow-lg hover:shadow-slate-300 hover:transition-all">
          <p className="text-gray-600 text-xs lg:text-sm leading-relaxed text-justify">
          سلام ، من برنامه نویس وب هستم که از سال 1391 کارم رو به صورت حرفه ای شروع کردم و پروژه های متعددی رو در مراکز دولتی ، کارخانجات و شرکتهای خصوصی انجام دادم و شاید بتونم خودم رو یک برنامه نویس <span className="font-extrabold capitalize">full stack</span>  معرفی کنم.
            
          </p>
        </div>
        <span className="bg-gray-200  flex justify-center border mt-5 rounded-tr-lg rounded-tl-lg w-2/6 xl:w-1/6  h-8 mx-auto text-center">
          <svg
            className="w-4 h-4 ml-1 my-auto"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
            ></path>
          </svg>
          <span className="text-sm my-auto"> مهارت ها </span>
        </span>
        <div className="bg-gray-100 flex flex-col p-4 mx-3 direction-x xl:mx-auto justify-center h-full border shadow-lg rounded-md xl:w-6/12 items-center hover:shadow-lg hover:shadow-slate-300 hover:transition-all">
          <span className="text-sm lg:text- mb-3">
            Back-End (
            <span className="text-xs lg:text-sm capitalize">asp.net core,nodeJs</span>)
          </span>
          <div className="mb-3 w-3/4 flex flex-row-reverse bg-gray-300 rounded-full h-4 dark:bg-gray-700">
            <div className="bg-blue-600 w-11/12 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full">
              95%
            </div>
          </div>
          <span className="text-sm mb-3">
            Front-End (
            <span className="text-xs lg:text-sm capitalize">
              ReactJs,NextJs,Tailwindcss
            </span>
            )
          </span>
          <div className="mb-3 w-3/4 flex flex-row-reverse bg-gray-300 rounded-full h-4 dark:bg-gray-700">
            <div className="bg-blue-600 tw-tex  w-10/12 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full">
              85%
            </div>
          </div>
        </div>
        <span className="bg-gray-200 flex justify-center border mt-5 rounded-tr-lg rounded-tl-lg w-2/6  xl:w-1/6 h-8 mx-auto text-center">
          <svg
            className="w-4 h-4 ml-1 my-auto"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M21 3l-6 6m0 0V4m0 5h5M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z"></path>
          </svg>
          <span className="text-sm my-auto">تماس با من</span>
        </span>
        <div className="bg-gray-100 flex flex-col justify-center items-center mb-4 p-4 mx-3 xl:mx-auto h-15 border shadow-lg rounded-md xl:w-3/12 xl:h-20 hover:shadow-lg hover:shadow-slate-300 hover:transition-all">
          <div className="flex justify-center w-full px-5">
            <a href="https://t.me/09147075090">
              <svg
                className="w-7 mx-5 hover:w-10 transition-all"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.3489 4.64183C21.4734 4.76317 21.526 4.94053 21.4877 5.11016C20.9359 7.55335 19.7598 13.9696 19.4822 20.0229C19.474 20.2015 19.3712 20.362 19.2124 20.4441C19.0537 20.5262 18.8632 20.5173 18.7127 20.4208C16.3647 18.9142 11.6602 16.0278 11.0091 15.6323C10.8858 15.5573 10.8008 15.4327 10.7761 15.2905C10.7514 15.1482 10.7894 15.0023 10.8803 14.8901C10.9514 14.8024 11.0276 14.706 11.1105 14.6011C11.5439 14.0526 12.1621 13.2704 13.2013 12.2766C13.4009 12.0858 13.7174 12.0929 13.9083 12.2925C14.0991 12.4921 14.092 12.8086 13.8924 12.9994C12.9904 13.862 12.432 14.5445 12.0123 15.0733C13.2789 15.8492 16.4196 17.7821 18.5284 19.1177C18.8395 13.8342 19.7665 8.44365 20.3378 5.69741C16.0184 6.93311 8.54822 10.0196 4.32406 11.8562L7.98141 13.2367C9.62636 12.1619 13.2647 9.91045 16.2836 8.46108C16.5325 8.34157 16.8312 8.44648 16.9507 8.69542C17.0703 8.94436 16.9653 9.24305 16.7164 9.36257C13.6191 10.8496 9.82741 13.2144 8.3188 14.2115C8.18492 14.3 8.01669 14.3189 7.86654 14.2622L2.82343 12.3587C2.63357 12.287 2.50586 12.1077 2.5002 11.9048C2.49453 11.702 2.61203 11.5158 2.7976 11.4337C6.88855 9.62258 16.2667 5.68497 20.8771 4.51536C21.0456 4.4726 21.2243 4.52049 21.3489 4.64183Z"
                  fill="black"
                />
              </svg>
            </a>
            <a href="https://instagram.com/sbabanejad">
              <svg
                className="w-7 mx-5 hover:w-10 transition-all"
                version="1.1"
                id="Capa_1"
                x="0px"
                y="0px"
                viewBox="0 0 48 48"
              >
                <path
                  d="M40.4,5.5H35.6c-1.434,0-2.6,1.166-2.6,2.6V12.9c0,1.434,1.166,2.6,2.6,2.6H40.4c1.434,0,2.6-1.166,2.6-2.6V8.1
			C43,6.666,41.834,5.5,40.4,5.5z M41,12.9c0,0.331-0.269,0.6-0.6,0.6H35.6c-0.331,0-0.6-0.269-0.6-0.6V8.1
			c0-0.331,0.269-0.6,0.6-0.6H40.4c0.331,0,0.6,0.269,0.6,0.6V12.9z"
                />
                <path
                  d="M37.8,0.5H10.2C4.576,0.5,0,5.089,0,10.731V17.5v2v17.77C0,42.911,4.576,47.5,10.2,47.5h27.6
			c5.624,0,10.2-4.589,10.2-10.23V19.5v-2v-6.769C48,5.089,43.424,0.5,37.8,0.5z M46,37.27c0,4.538-3.679,8.23-8.2,8.23H10.2
			c-4.522,0-8.2-3.692-8.2-8.23V19.5h12.221C11.62,22.043,10,25.584,10,29.5c0,7.72,6.28,14,14,14s14-6.28,14-14
			c0-3.916-1.62-7.457-4.221-10H46V37.27z M36,29.5c0,6.617-5.383,12-12,12s-12-5.383-12-12s5.383-12,12-12S36,22.883,36,29.5z
			 M31.174,17.5c-2.101-1.261-4.55-2-7.174-2s-5.073,0.739-7.174,2H2v-6.769C2,6.192,5.679,2.5,10.2,2.5h27.6
			c4.521,0,8.2,3.692,8.2,8.231V17.5H31.174z"
                />
                <path
                  d="M15,29.5c0,4.962,4.037,9,9,9s9-4.038,9-9s-4.037-9-9-9S15,24.538,15,29.5z M31,29.5c0,3.86-3.141,7-7,7s-7-3.14-7-7
			s3.141-7,7-7S31,25.64,31,29.5z"
                />
              </svg>
            </a>
            <a href="https://wa.me/09147075090">
              <svg
                className="w-7 mx-5 hover:w-10 transition-all"
                version="1.1"
                id="Capa_1"
                x="0px"
                y="0px"
                viewBox="0 0 52 52"
              >
                <path
                  d="M26,0C11.663,0,0,11.663,0,26c0,4.891,1.359,9.639,3.937,13.762C2.91,43.36,1.055,50.166,1.035,50.237
			c-0.096,0.352,0.007,0.728,0.27,0.981c0.263,0.253,0.643,0.343,0.989,0.237L12.6,48.285C16.637,50.717,21.26,52,26,52
			c14.337,0,26-11.663,26-26S40.337,0,26,0z M26,50c-4.519,0-8.921-1.263-12.731-3.651c-0.161-0.101-0.346-0.152-0.531-0.152
			c-0.099,0-0.198,0.015-0.294,0.044l-8.999,2.77c0.661-2.413,1.849-6.729,2.538-9.13c0.08-0.278,0.035-0.578-0.122-0.821
			C3.335,35.173,2,30.657,2,26C2,12.767,12.767,2,26,2s24,10.767,24,24S39.233,50,26,50z"
                />
                <path
                  d="M42.985,32.126c-1.846-1.025-3.418-2.053-4.565-2.803c-0.876-0.572-1.509-0.985-1.973-1.218
			c-1.297-0.647-2.28-0.19-2.654,0.188c-0.047,0.047-0.089,0.098-0.125,0.152c-1.347,2.021-3.106,3.954-3.621,4.058
			c-0.595-0.093-3.38-1.676-6.148-3.981c-2.826-2.355-4.604-4.61-4.865-6.146C20.847,20.51,21.5,19.336,21.5,18
			c0-1.377-3.212-7.126-3.793-7.707c-0.583-0.582-1.896-0.673-3.903-0.273c-0.193,0.039-0.371,0.134-0.511,0.273
			c-0.243,0.243-5.929,6.04-3.227,13.066c2.966,7.711,10.579,16.674,20.285,18.13c1.103,0.165,2.137,0.247,3.105,0.247
			c5.71,0,9.08-2.873,10.029-8.572C43.556,32.747,43.355,32.331,42.985,32.126z M30.648,39.511
			c-10.264-1.539-16.729-11.708-18.715-16.87c-1.97-5.12,1.663-9.685,2.575-10.717c0.742-0.126,1.523-0.179,1.849-0.128
			c0.681,0.947,3.039,5.402,3.143,6.204c0,0.525-0.171,1.256-2.207,3.293C17.105,21.48,17,21.734,17,22c0,5.236,11.044,12.5,13,12.5
			c1.701,0,3.919-2.859,5.182-4.722c0.073,0.003,0.196,0.028,0.371,0.116c0.36,0.181,0.984,0.588,1.773,1.104
			c1.042,0.681,2.426,1.585,4.06,2.522C40.644,37.09,38.57,40.701,30.648,39.511z"
                />
              </svg>
            </a>
            <a href="mailto:saman999@gmail.com">
              <svg
                className="w-8 mx-5 hover:w-10 transition-all"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
