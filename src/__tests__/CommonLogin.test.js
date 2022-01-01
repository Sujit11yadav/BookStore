import { mount, shallow } from "enzyme";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-17-updated";
import CommonLogin from "../pages/commonlogin/CommonLogin";
import Login from "../pages/login/Login";
import SignUp from "../pages/signup/SignUp";

Enzyme.configure({ adapter: new Adapter() });

const commonLoginTest = shallow(<CommonLogin />);
const commonLoginChildTest = mount(<CommonLogin />);

describe("test if containers of CommonLogin are loaded", () => {
  it("test if Common Login container is loaded", () => {
    expect(commonLoginTest.find(".Common-Login").exists()).toBe(true);
  });
});

describe("test if child containers of CommonLogin are loaded", () => {
  it("test if SignUp component is loaded", () => {
    expect(commonLoginChildTest.find(SignUp).exists()).toBe(true);
  });

  it("test if Login component is loaded", () => {
    // const obj = {
    //   listenToActive: () => {
    //     console.log("click");
    //   },
    // };
    // const loginChildTest = mount(<Login {...obj} />);
    // const clickToLog = loginChildTest.find(".change");
    // clickToLog.simulate("click");
    // loginChildTest.update();

    expect(commonLoginChildTest.find(".emailFeild").exists()).toBe(true);
  });
});
