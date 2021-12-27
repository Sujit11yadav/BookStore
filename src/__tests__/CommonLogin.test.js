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
  it("test if header container is loaded", () => {
    expect(commonLoginTest.find(".Common-Login").exists()).toBe(true);
  });
});

describe("test if child containers of CommonLogin are loaded", () => {
  it("test if SignUp component is loaded", () => {
    expect(commonLoginChildTest.find(SignUp).exists()).toBe(true);
  });
});
