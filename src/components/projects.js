import React from "react"

const Projects = (props) => {

  return (
    <div name='work' className='w-full md:h-screen text-gray-800 bg-blue-50'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-2'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-800 border-pink-600'>
            Personal Projects
          </p>
          <p className='py-6'>Check out some of my recent work</p>
        </div>
        <div className='grid sm:grid-cols-1 md:grid-cols-3 gap-8'>
          <div className="flex flex-col bg-slate-200 shadow-md rounded-lg p-2">
            <span className="text-2xl tracking-widest font-mono font-bold my-2">HISAB KITAB</span>
            <span className="text-xl mb-2">
            Keep track of your expenses and balances and get an in depth analysis of your spendings.
            </span>
            <span className="text-xl font-mono font-medium">TECHNOLOGY STACK:</span>
            <ul className="mx-8 list-disc">
              <li>Golang</li>
              <li>React</li>
              <li>Mariadb</li>
              <li>AWS</li>
            </ul>
            <div className="flex justify-center my-2">
              <a href="https://hisabkitab.topnerd.space" target="_blank" rel="noreferrer" className="m-2 p-2 rounded active:scale-95 shadow-md outline outline-2 outline-blue-500 hover:bg-blue-500 hover:text-white">DEMO</a>
              <a href="https://github.com/Sarthak001/hisabkitab" target="_blank" rel="noreferrer"  className="m-2 p-2 active:scale-95  rounded shadow-md outline outline-2 outline-blue-500 hover:bg-blue-500 hover:text-white">VIEW CODE</a> 
            </div>
          </div>
          <div className="flex flex-col bg-slate-200 shadow-md rounded-lg p-2">
            <span className="text-2xl tracking-widest font-mono font-bold my-2">PROSHOT</span>
            <span className="text-xl mb-2">
            A light and fast photo and video gallery. Access, manage and share photos with your loved ones.
            </span>
            <span className="text-xl font-mono font-medium">TECHNOLOGY STACK:</span>
            <ul className="mx-8 list-disc">
              <li>Python</li>
              <li>React</li>
              <li>Mariadb</li>
              <li>AWS</li>
            </ul>
            <div className="flex justify-center my-2">
              <a href="https://proshot.topnerd.space" target="_blank" rel="noreferrer" className="m-2 p-2 rounded active:scale-95 shadow-md outline outline-2 outline-blue-500 hover:bg-blue-500 hover:text-white">DEMO</a>
              <a href="https://github.com/Sarthak001/proshot" target="_blank" rel="noreferrer"  className="m-2 p-2 rounded active:scale-95 shadow-md outline outline-2 outline-blue-500 hover:bg-blue-500 hover:text-white">VIEW CODE</a> 
            </div>
          </div>
          <div className="flex flex-col bg-slate-200 shadow-md rounded-lg p-2">
            <span className="text-2xl tracking-widest font-mono font-bold my-2">FILESHARING</span>
            <span className="text-xl mb-2">
            Filesharing server with basic authentication for file protection. Easy to setup and manage.
            </span>
            <span className="text-xl font-mono font-medium">TECHNOLOGY STACK:</span>
            <ul className="mx-8 list-disc">
              <li>Python</li>
              <li>React</li>
              <li>AWS</li>
            </ul>
            {/* <div className="flex justify-center">
              <a className="m-2 p-2 rounded shadow-md outline outline-2 outline-blue-500 hover:bg-blue-500 hover:text-white">DEMO</a>
              <a className="m-2 p-2 rounded shadow-md outline outline-2 outline-blue-500 hover:bg-blue-500 hover:text-white">VIEW CODE</a> 
            </div> */}
          </div>

          

    

        </div>
      </div>
    </div>
  );

}

export default Projects;