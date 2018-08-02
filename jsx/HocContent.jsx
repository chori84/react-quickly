const EnhancedButton = LoadWebsite(HocButton);
const EnhancedLink = LoadWebsite(HocLink);
const EnhancedLogo = LoadWebsite(HocLogo);

class HocContent extends React.Component {
  render() {
    return <div>
      <EnhancedButton />
      <br />
      <EnhancedLink />
      <br />
      <EnhancedLogo />
      <br />
      <iframe id="frame" src="" width="600" height="500" />
    </div>;
  }
}

ReactDOM.render(
 <HocContent />,
 document.getElementById('hocContent') 
);