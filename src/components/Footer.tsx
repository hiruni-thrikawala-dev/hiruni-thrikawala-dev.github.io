const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold">Hiruni Kawmadhi</h3>
            <p className="text-primary-foreground/80">
              Information Systems Undergraduate
            </p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-primary-foreground/80 text-sm">
              © 2024 Hiruni Kawmadhi. Built with passion and React.
            </p>
            <p className="text-primary-foreground/60 text-xs mt-1">
              Open to opportunities • Ready to make an impact
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;