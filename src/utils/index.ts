export const dataTestIdStringMod = (str: string = "", splitSymbl?: string = " ", joinSymbl?: string = "-") => {
  return str?.replace(/[_ ]/g, "-").toLowerCase();
};
