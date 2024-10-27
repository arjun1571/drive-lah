export const dataTestIdStringMod = (str: string = "", splitSymbl?: string = " ", joinSymbl?: string = "-") => {
  return str?.replace(/[_ ]/g, "-").toLowerCase();
};

export const dataTestIdentifier = (testId?: string, registerName?: string, name?: string, id?: string) => {
  if (testId) return testId;
  else if (name) return name;
  else if (id) return id;
  else if (registerName) return registerName;
  else return "";
};

export const generateId = () => Math.floor(100000 + Math.random() * 900000);
