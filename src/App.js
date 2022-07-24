function App() {
  return (
    <>
      <nav className="relative container mx-auto p-6">
        <div className="flex items-center justify-between">
          {/* logo */}
          <div className="pt-2">
            <img src={"img/logo.svg"} alt="" />
          </div>
          <div className="hidden space-x-6 md:flex">
            <button href="#" className="hover:text-darkGrayishBlue">
              Pricing
            </button>
            <button href="#" className="hover:text-darkGrayishBlue">
              Product
            </button>
            <button href="#" className="hover:text-darkGrayishBlue">
              About Us
            </button>
            <button href="#" className="hover:text-darkGrayishBlue">
              Careers
            </button>
            <button href="#" className="hover:text-darkGrayishBlue">
              Comunity
            </button>
          </div>
          <button className="hidden  p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight md:block">
            Get Started
          </button>
        </div>
      </nav>

      <section id="hero">
        <div className="container flex flex-col-reverse md:flex-row items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0">
          <div className="flex flex-col mb-32 space-y-2 md:w-1/2">
            <h1 className="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left">
              {" "}
              Bring Everyone together to build better products
            </h1>
            <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              nisi, aspernatur esse ad minima maiores unde animi est quia omnis
              amet facere deleniti molestiae doloribus corrupti accusantium
              totam! Adipisci, perferendis!
            </p>
            <div className="flex justify-center md:justify-start">
              <button className="p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight">
                Get Started
              </button>
            </div>
          </div>
          <div className="md:w-1/2" />
          <img src="img/illustration-intro.svg" alt="" />
        </div>
      </section>
    </>
  )
}

export default App
