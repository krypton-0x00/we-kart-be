export const signup = (
  req: { body: { email: any; username: any; password: any } },
  res: any
) => {
  const { email, username, password } = req.body;
  if (!email || !username || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }
};
