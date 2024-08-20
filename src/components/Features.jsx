function Features({ features }) { // Destructuring 'features' from props
    return (
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="text-center mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
              Features
            </h1>
            <div className="flex mt-6 justify-center">
              <div className="w-16 h-1 rounded-full bg-yellow-500 inline-flex" />
            </div>
          </div>
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
            {
              features.map((feature) => ( // Renamed 'data' to 'feature' for clarity
                <div key={feature.id} className="p-4 md:w-1/3 flex flex-col text-center items-center">
                  <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-yellow-100 text-yellow-500 mb-5 flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div className="flex-grow">
                    <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                      {feature.title}
                    </h2>
                    <p className="leading-relaxed text-base">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </section>
    );
  }
  
  export default Features;