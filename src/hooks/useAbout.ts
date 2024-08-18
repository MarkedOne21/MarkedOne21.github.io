type AboutDataDescriptionSentence = {
  id: string;
  sentence: string;
};

type AboutData = {
  name: string;
  descriptionSentences: AboutDataDescriptionSentence[];
};

export default (): AboutData => {
  return {
    name: "Alexandru Groza",
    descriptionSentences: [
      "With over 2 years of experience as a 3D Artist and Modeler, I've had the opportunity to bring a wide range of projects to life, from gaming to animation and virtual reality.",
      "My passion lies in creating detailed and realistic 3D models using tools like Blender and ZBrush.",
      "I also have a solid background in texturing, rigging, and animation, which helps me develop characters and environments that feel dynamic and alive",
      "I’m known for my attention to detail and strong sense of aesthetics, and I love collaborating with teams to turn creative ideas into reality.",
    ].map((sentence) => ({ id: crypto.randomUUID().toString(), sentence })),
  };
};
