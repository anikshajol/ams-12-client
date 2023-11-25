const Packages = () => {
  const packages = [
    {
      amount: "5",
      employee: "Maximum 5 Employee",
    },
    {
      amount: "10",
      employee: "Maximum 10 Employee",
    },
    {
      amount: "20",
      employee: "Maximum 15 Employee",
    },
  ];
  return (
    <>
      <h2 className="text-4xl font-bold text-center mt-4">Packages</h2>
      <div className="grid grid-cols-3 max-w-5xl mx-auto my-6">
        {packages.map((item, idx) => (
          <div key={idx}>
            <div className="card w-80 bg-orange-500 text-white  shadow-xl shadow-orange-500">
              <div className="card-body">
                <h2 className="card-title text-4xl font-bold">
                  {" "}
                  ${item.amount}{" "}
                </h2>
                <p className="text-2xl">{item.employee}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Packages;
