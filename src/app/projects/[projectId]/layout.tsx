



const Layout = async ({children,params}: {
  children: React.ReactNode;
  params: Promise<{ projectId: string }>
}) => {
  const { projectId } = await params;

  return (
    <div>

        {children}
    </div>
  );
}
 
export default Layout;
