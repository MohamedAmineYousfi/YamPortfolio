import React from "react"
import Image from "next/image"
import profile from "../public/profile.jpg"

const Projects = () => {
    return (
        
        <div className="container   max-w-4xl mx-auto mt-16 antialiased">
            <div className="lg:grid grid-cols-2 gap-4 item-center lg:-mx-4 text-center lg:text-left">

            <div class="flex font-serif bg-indigo-200 rounded-lg">
  <div class="flex-none w-64 relative ">
    <img src="kamergicapture .jpg" alt="" class="absolute inset-0 w-full h-full object-cover rounded-lg" />
  </div>
  <form class="flex-auto p-6 w-12 hover:animate-pulse">
    <div class="flex flex-wrap items-baseline">
      <h1 class="w-full flex-none mb-3 text-2xl leading-none text-slate-900">
       Kamergi Audio 
      </h1>
      <div class="flex-auto text-lg font-medium text-slate-500">
       E-commerce Web Site 
      </div>
      {/* <div class="text-xs leading-6 font-medium uppercase text-slate-300">
        React - Redux 
      </div> */}
    </div>
    <div class="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
      <div class="space-x-1 flex text-sm font-medium">
        <label>
          <input class="sr-only peer" name="size" type="radio" value="xs" checked />
          <div class="w-15 h-10 rounded-full uppercase flex items-center justify-center text-slate-500 peer-checked:bg-slate-100 peer-checked:text-slate-900">
            React 
          </div>
        </label>
        <label>
          <input class="sr-only peer" name="size" type="radio" value="s" />
          {/* <div class="w-15 h-10 rounded-full uppercase flex items-center justify-center text-slate-500 peer-checked:bg-slate-100 peer-checked:text-slate-900">
            Redux 
          </div> */}
        </label>
        {/* <label>
          <input class="sr-only peer" name="size" type="radio" value="m" />
          <div class="w-7 h-7 rounded-full flex items-center justify-center text-slate-500 peer-checked:bg-slate-100 peer-checked:text-slate-900">
            M
          </div>
        </label>
        <label>
          <input class="sr-only peer" name="size" type="radio" value="l" />
          <div class="w-7 h-7 rounded-full flex items-center justify-center text-slate-500 peer-checked:bg-slate-100 peer-checked:text-slate-900">
            L
          </div>
        </label>
        <label>
          <input class="sr-only peer" name="size" type="radio" value="xl" />
          <div class="w-7 h-7 rounded-full flex items-center justify-center text-slate-500 peer-checked:bg-slate-100 peer-checked:text-slate-900">
            XL
          </div>
        </label> */}
      </div>
    </div>
    <div class="flex space-x-4 mb-5 text-sm font-medium">
      <div class="flex-auto flex space-x-4 pr-4">
        
        <button class="flex-none w-1/2 h-12 uppercase font-medium tracking-wider bg-slate-900 text-white" type="submit">
         <a href='http://kamergiaudio.tn/'> Link</a>
        </button>
        {/* <button class="flex-none w-1/2 h-12 uppercase font-medium tracking-wider border border-slate-200 text-slate-900" type="button">
          Github
        </button> */}
      </div>
      {/* <button class="flex-none flex items-center justify-center w-12 h-12 text-slate-300 border border-slate-200" type="button" aria-label="Like">
        <svg width="20" height="20" fill="currentColor" aria-hidden="true">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
        </svg>
      </button> */}
    </div>
    <p class="text-sm text-slate-500">
    Leading audio equipment supplier.
    </p>
  </form>
</div> 


<div class="flex font-serif bg-indigo-200 rounded-lg ">
  <div class="flex-none w-64 relative ">
    <img src="abdelcapture .jpg" alt="" class="absolute inset-0 w-full h-full object-cover rounded-lg" />
  </div>
  <form class="flex-auto p-6 w-12 hover:animate-pulse">
    <div class="flex flex-wrap items-baseline">
      <h1 class="w-full flex-none mb-3 text-2xl leading-none text-slate-900">
        Abdel waheb Bouden
      </h1>
      <div class="flex-auto text-lg font-medium text-slate-500">
        Dynamic web Site 
      </div>
      {/* <div class="text-xs leading-6 font-medium uppercase text-slate-500">
        In stock
      </div> */}
    </div>
    <div class="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
      <div class="space-x-1 flex text-sm font-medium">
        <label>
          <input class="sr-only peer" name="size" type="radio" value="xs" checked />
          <div class="w-15 h-10 rounded-full uppercase flex items-center justify-center text-slate-500 peer-checked:bg-slate-100 peer-checked:text-slate-900">
            Next
          </div>
        </label>
        {/* <label>
          <input class="sr-only peer" name="size" type="radio" value="s" />
          <div class="w-7 h-7 rounded-full flex items-center justify-center text-slate-500 peer-checked:bg-slate-100 peer-checked:text-slate-900">
            S
          </div>
        </label>
        <label>
          <input class="sr-only peer" name="size" type="radio" value="m" />
          <div class="w-7 h-7 rounded-full flex items-center justify-center text-slate-500 peer-checked:bg-slate-100 peer-checked:text-slate-900">
            M
          </div>
        </label>
        <label>
          <input class="sr-only peer" name="size" type="radio" value="l" />
          <div class="w-7 h-7 rounded-full flex items-center justify-center text-slate-500 peer-checked:bg-slate-100 peer-checked:text-slate-900">
            L
          </div>
        </label> */}
        {/* <label>
          <input class="sr-only peer" name="size" type="radio" value="xl" />
          <div class="w-7 h-7 rounded-full flex items-center justify-center text-slate-500 peer-checked:bg-slate-100 peer-checked:text-slate-900">
            XL
          </div>
        </label> */}
      </div>
    </div>
    <div class="flex space-x-4 mb-5 text-sm font-medium">
      <div class="flex-auto flex space-x-4 pr-4">
        
        <button class="flex-none w-1/2 h-12 uppercase font-medium tracking-wider bg-slate-900 text-white" type="submit">
        <a href='https://abdelwahebbouden.art/'>  Link</a>
        </button>
        {/* <button class="flex-none w-1/2 h-12 uppercase font-medium tracking-wider border border-slate-200 text-slate-900" type="button">
          Github
        </button> */}
      </div>
      {/* <button class="flex-none flex items-center justify-center w-12 h-12 text-slate-300 border border-slate-200" type="button" aria-label="Like">
        <svg width="20" height="20" fill="currentColor" aria-hidden="true">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
        </svg>
      </button> */}
    </div>
    <p class="text-sm text-slate-500">
    Film producer.
    </p>
  </form>
</div> 



<div class="flex font-serif bg-indigo-200 rounded-lg">
  <div class="flex-none w-64 relative ">
    <img src="FitHub.jpg" alt="" class="absolute inset-0 w-full h-full object-cover rounded-lg" />
  </div>
  <form class="flex-auto p-6 w-12 hover:animate-pulse">
    <div class="flex flex-wrap items-baseline">
      <h1 class="w-full flex-none mb-3 text-2xl leading-none text-slate-900">
        Fithub Mobile
      </h1>
      <div class="flex-auto text-lg font-medium text-slate-500">
       Mobile App 
      </div>
      {/* <div class="text-xs leading-6 font-medium uppercase text-slate-500">
        In stock
      </div> */}
    </div>
    <div class="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
      <div class="space-x-1 flex text-sm font-medium">
        <label>
          <input class="sr-only peer" name="size" type="radio" value="xs" checked />
          <div class="w-15 h-10 rounded-full uppercase flex items-center justify-center text-slate-500 peer-checked:bg-slate-100 peer-checked:text-slate-900">
            React-Native
          </div>
        </label>
        <label>
          <input class="sr-only peer" name="size" type="radio" value="s" />
          {/* <div class="w-15 h-10 rounded-full uppercase flex items-center justify-center text-slate-500 peer-checked:bg-slate-100 peer-checked:text-slate-900">
            Redux
          </div> */}
        </label>
        {/* <label>
          <input class="sr-only peer" name="size" type="radio" value="m" />
          <div class="w-7 h-7 rounded-full flex items-center justify-center text-slate-500 peer-checked:bg-slate-100 peer-checked:text-slate-900">
            M
          </div>
        </label>
        <label>
          <input class="sr-only peer" name="size" type="radio" value="l" />
          <div class="w-7 h-7 rounded-full flex items-center justify-center text-slate-500 peer-checked:bg-slate-100 peer-checked:text-slate-900">
            L
          </div>
        </label>
        <label>
          <input class="sr-only peer" name="size" type="radio" value="xl" />
          <div class="w-7 h-7 rounded-full flex items-center justify-center text-slate-500 peer-checked:bg-slate-100 peer-checked:text-slate-900">
            XL
          </div>
        </label> */}
      </div>
    </div>
    <div class="flex space-x-4 mb-5 text-sm font-medium">
      <div class="flex-auto flex space-x-4 pr-4">
        {/* <button class="flex-none w-1/2 h-12 uppercase font-medium tracking-wider bg-slate-900 text-white" type="submit">
          Link
        </button> */}
        <button class="flex-none w-1/2 h-12 uppercase font-medium tracking-wider border border-slate-200 text-slate-900" type="button">
          Github
        </button>
      </div>
      {/* <button class="flex-none flex items-center justify-center w-12 h-12 text-slate-300 border border-slate-200" type="button" aria-label="Like">
        <svg width="20" height="20" fill="currentColor" aria-hidden="true">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
        </svg>
      </button> */}
    </div>
    <p class="text-sm text-slate-500">
      Gym application.
    </p>
  </form>
</div>  

 <div class="flex font-serif bg-indigo-200 rounded-lg">
  <div class="flex-none w-64 relative focus:touch-pan-x">
    <img src="dashboardFitub.jpg" alt="" class="absolute inset-0 w-full h-full object-cover   hover:animate-pulse rounded-lg" />
  </div>
  <form class="flex-auto p-6 w-12 hover:animate-pulse">
    <div class="flex flex-wrap items-baseline">
      <h1 class="w-full flex-none mb-3 text-2xl leading-none text-slate-900">
        Fithub Dash
      </h1>
      <div class="flex-auto text-lg font-medium text-slate-500">
       Web Site
      </div>
      {/* <div class="text-xs leading-6 font-medium uppercase text-slate-500">
        In stock
      </div> */}
    </div>
    <div class="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
      <div class="space-x-1 flex text-sm font-medium">
        <label>
          <input class="sr-only peer" name="size" type="radio" value="xs" checked />
          <div class="w-15 h-10  uppercase rounded-full flex items-center justify-center text-slate-500 peer-checked:bg-slate-100 peer-checked:text-slate-900">
            Next JS
          </div>
        </label>
        <label>
          <input class="sr-only peer" name="size" type="radio" value="s" />
          {/* <div class="w-15 h-10  uppercase rounded-full flex items-center justify-center text-slate-500 peer-checked:bg-slate-100 peer-checked:text-slate-900">
            ChakraUI
          </div> */}
        </label>
        {/* <label>
          <input class="sr-only peer" name="size" type="radio" value="m" />
          <div class="w-15 h-10 uppercase rounded-full flex items-center justify-center text-slate-500 peer-checked:bg-slate-100 peer-checked:text-slate-900">
            PostgreSql
          </div> */}
        {/* </label> */}
        {/* <label>
          <input class="sr-only peer" name="size" type="radio" value="l" />
          <div class="w-7 h-7 rounded-full flex items-center justify-center text-slate-500 peer-checked:bg-slate-100 peer-checked:text-slate-900">
            L
          </div>
        </label>
        <label>
          <input class="sr-only peer" name="size" type="radio" value="xl" />
          <div class="w-7 h-7 rounded-full flex items-center justify-center text-slate-500 peer-checked:bg-slate-100 peer-checked:text-slate-900">
            XL
          </div>
        </label> */}
      </div>
    </div>
    <div class="flex space-x-4 mb-5 text-sm font-medium">
      <div class="flex-auto flex space-x-4 pr-4">
        {/* <button class="flex-none w-1/2 h-12 uppercase font-medium tracking-wider bg-slate-900 text-white" type="submit">
         Link
        </button> */}
        <button class="flex-none w-1/2 h-12 uppercase font-medium tracking-wider border border-slate-200 text-slate-900" type="button">
          Github
        </button>
      </div>
      {/* <button class="flex-none flex items-center justify-center w-12 h-12 text-slate-300 border border-slate-200" type="button" aria-label="Like">
        <svg width="20" height="20" fill="currentColor" aria-hidden="true">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
        </svg>
      </button> */}
    </div>
    <p class="text-sm text-slate-500">
      Dashboard for the admin of gym.
    </p>
  </form>
</div> 

<div class="flex font-serif bg-indigo-200 rounded-lg">
  <div class="flex-none w-64 relative focus:touch-pan-x">
    <img src="moneyhuescreen.png" alt="" class="absolute inset-0 w-full h-full object-cover   hover:animate-pulse rounded-lg" />
  </div>
  <form class="flex-auto p-6  w-12 hover:animate-pulse">
    <div class="flex flex-wrap items-baseline">
      <h1 class="w-full flex-none mb-3 text-2xl leading-none text-slate-900">
        Money Hue Dash
      </h1>
      <div class="flex-auto text-lg font-medium text-slate-500">
       Web Site
      </div>
      {/* <div class="text-xs leading-6 font-medium uppercase text-slate-500">
        In stock
      </div> */}
    </div>
    <div class="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
      <div class="space-x-1 flex text-sm font-medium">
        <label>
          <input class="sr-only peer" name="size" type="radio" value="xs" checked />
          <div class="w-15 h-10  uppercase rounded-full flex items-center justify-center text-slate-500 peer-checked:bg-slate-100 peer-checked:text-slate-900">
            React JS
          </div>
        </label>
        <label>
          <input class="sr-only peer" name="size" type="radio" value="s" />
          {/* <div class="w-15 h-10  uppercase rounded-full flex items-center justify-center text-slate-500 peer-checked:bg-slate-100 peer-checked:text-slate-900">
            ChakraUI
          </div> */}
        </label>
        {/* <label>
          <input class="sr-only peer" name="size" type="radio" value="m" />
          <div class="w-15 h-10 uppercase rounded-full flex items-center justify-center text-slate-500 peer-checked:bg-slate-100 peer-checked:text-slate-900">
            PostgreSql
          </div> */}
        {/* </label> */}
        {/* <label>
          <input class="sr-only peer" name="size" type="radio" value="l" />
          <div class="w-7 h-7 rounded-full flex items-center justify-center text-slate-500 peer-checked:bg-slate-100 peer-checked:text-slate-900">
            L
          </div>
        </label>
        <label>
          <input class="sr-only peer" name="size" type="radio" value="xl" />
          <div class="w-7 h-7 rounded-full flex items-center justify-center text-slate-500 peer-checked:bg-slate-100 peer-checked:text-slate-900">
            XL
          </div>
        </label> */}
      </div>
    </div>
    <div class="flex space-x-4 mb-5 text-sm font-medium">
      <div class="flex-auto flex space-x-4 pr-4">
        <button class="flex-none w-1/2 h-12 uppercase font-medium tracking-wider bg-slate-900 text-white" type="submit">
        <a href='http://www.moneyhue.fr/'>  Link</a>
        </button>
        {/* <button class="flex-none w-1/2 h-12 uppercase font-medium tracking-wider border border-slate-200 text-slate-900" type="button">
          Github
        </button> */}
      </div>
      {/* <button class="flex-none flex items-center justify-center w-12 h-12 text-slate-300 border border-slate-200" type="button" aria-label="Like">
        <svg width="20" height="20" fill="currentColor" aria-hidden="true">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
        </svg>
      </button> */}
    </div>
    <p class="text-sm text-slate-500">
      Dashboard for investor.
    </p>
  </form>
</div> 

<div class="flex font-serif bg-indigo-200 rounded-lg">
  <div class="flex-none w-64 relative focus:touch-pan-x">
    <img src="pcdrivescreen.png" alt="" class="absolute inset-0 w-full h-full object-cover   hover:animate-pulse rounded-lg" />
  </div>
  <form class="flex-auto p-6 w-12 hover:animate-pulse">
    <div class="flex flex-wrap items-baseline">
      <h1 class="w-full flex-none mb-3 text-2xl leading-none text-slate-900">
        Pc-Connect 
      </h1>
      <div class="flex-auto text-lg font-medium text-slate-500">
       Web Site
      </div>
      {/* <div class="text-xs leading-6 font-medium uppercase text-slate-500">
        In stock
      </div> */}
    </div>
    <div class="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
      <div class="space-x-1 flex text-sm font-medium">
        <label>
          <input class="sr-only peer" name="size" type="radio" value="xs" checked />
          <div class="w-15 h-10  uppercase rounded-full flex items-center justify-center text-slate-500 peer-checked:bg-slate-100 peer-checked:text-slate-900">
            WordPress
          </div>
        </label>
        <label>
          <input class="sr-only peer" name="size" type="radio" value="s" />
          {/* <div class="w-15 h-10  uppercase rounded-full flex items-center justify-center text-slate-500 peer-checked:bg-slate-100 peer-checked:text-slate-900">
            ChakraUI
          </div> */}
        </label>
        {/* <label>
          <input class="sr-only peer" name="size" type="radio" value="m" />
          <div class="w-15 h-10 uppercase rounded-full flex items-center justify-center text-slate-500 peer-checked:bg-slate-100 peer-checked:text-slate-900">
            PostgreSql
          </div> */}
        {/* </label> */}
        {/* <label>
          <input class="sr-only peer" name="size" type="radio" value="l" />
          <div class="w-7 h-7 rounded-full flex items-center justify-center text-slate-500 peer-checked:bg-slate-100 peer-checked:text-slate-900">
            L
          </div>
        </label>
        <label>
          <input class="sr-only peer" name="size" type="radio" value="xl" />
          <div class="w-7 h-7 rounded-full flex items-center justify-center text-slate-500 peer-checked:bg-slate-100 peer-checked:text-slate-900">
            XL
          </div>
        </label> */}
      </div>
    </div>
    <div class="flex space-x-4 mb-5 text-sm font-medium">
      <div class="flex-auto flex space-x-4 pr-4">
        <button class="flex-none w-1/2 h-12 uppercase font-medium tracking-wider bg-slate-900 text-white" type="submit">
        <a href='https://pcdriveconnect.com/'>  Link</a>
        </button>
        {/* <button class="flex-none w-1/2 h-12 uppercase font-medium tracking-wider border border-slate-200 text-slate-900" type="button">
          Github
        </button> */}
      </div>
      {/* <button class="flex-none flex items-center justify-center w-12 h-12 text-slate-300 border border-slate-200" type="button" aria-label="Like">
        <svg width="20" height="20" fill="currentColor" aria-hidden="true">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
        </svg>
      </button> */}
    </div>
    <p class="text-sm text-slate-500">
      E-commerce website.
    </p>
  </form>
</div> 


</div>
                </div>
                // <div className="flex-shrink-0 lg:mt-12 lg:px-4 mb-10">
                //     <Image
                //         src={profile}
                //         alt="Profile"
                //         priority={true}
                //         className="rounded-full"
                //         width={250}
                //         height={250}
                //         placeholder="blur"
                //     />
                // </div>
        //     </div>
        // </div>

    )
}

export default Projects;