export default function ActivityCards() {
  const activities = [
    {
      title: "White Water Rafting",
      description: "Experience the rush of class IV rapids",
      price: "$99/person",
      image: "rafting-image.jpg"
    },
    {
      title: "Mountain Camping",
      description: "Sleep under the stars in the wilderness",
      price: "$75/person",
      image: "camping-image.jpg"
    }
  ];

  return (
    <section className="py-16 px-16">
      <h2 className="text-[48px] font-bold mb-12 text-center">Popular Activities</h2>
      
      <div className="grid grid-cols-3 gap-8">
        {activities.map((activity, index) => (
          <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
            <img 
              src={activity.image} 
              alt={activity.title}
              className="w-full h-[300px] object-cover"
            />
            <div className="p-6">
              <h3 className="text-[24px] font-bold mb-2">{activity.title}</h3>
              <p className="text-[16px] text-gray-600 mb-4">{activity.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-[20px] font-medium">{activity.price}</span>
                <button className="bg-[#0066CC] text-white px-4 py-2 rounded-md hover:bg-[#0052A3]">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};