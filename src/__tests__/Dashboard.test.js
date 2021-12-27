import Dashboard from "../pages/dashboard/Dashboard";
import { mount, shallow } from "enzyme";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-17-updated";
import MyCart from "../components/mycart/mycarts/MyCart";
import Home from "../pages/home/Home";
import AboutBook from "../components/aboutbook/AboutBook";
import Login from "../pages/login/Login";
import SignUp from "../pages/signup/SignUp";

Enzyme.configure({ adapter: new Adapter() });

// Enzyme.configure({ adapter: new Adapter() });

const dashboardTest = shallow(<Dashboard />);
const dashboardChildTest = mount(<Dashboard />);

describe("test if containers of dashboard are loaded", () => {
  it("test if header container is loaded", () => {
    expect(dashboardTest.find(".header").exists()).toBe(true);
  });

  it("test if main container is loaded", () => {
    expect(dashboardTest.find(".main-content").exists()).toBe(true);
  });

  it("test if title container is loaded", () => {
    expect(dashboardTest.find(".title").exists()).toBe(true);
  });

  it("test if left container is loaded", () => {
    expect(dashboardTest.find(".left-content").exists()).toBe(true);
  });

  it("test if book container is loaded", () => {
    expect(dashboardTest.find(".book").exists()).toBe(true);
  });

  it("test if items container is loaded", () => {
    expect(dashboardTest.find(".items").exists()).toBe(true);
  });

  it("test if dashboard container is loaded", () => {
    expect(dashboardTest.find(".Dashboard").exists()).toBe(true);
  });
});

describe("test if child containers of dashboard are loaded", () => {
  it("test if MyCart component is loaded", () => {
    expect(dashboardChildTest.find(MyCart).exists()).toBe(false);
  });

  it("test if Home component is loaded", () => {
    expect(dashboardChildTest.find(Home).exists()).toBe(false);
  });

  it("test if AboutBook component is loaded", () => {
    expect(dashboardChildTest.find(AboutBook).exists()).toBe(false);
  });
});

// describe("test if counter add and sub are updating the counter value as expected", () => {
//   it("test if add quatity is working", () => {
//     const comp = mount(<AboutBook />);
//     const addToBag = comp.find(".addToBag");
//     addToBag.simulate("click");
//     comp.update();
//     const addButton = comp.find(".plus-icon");
//     expect(comp.state("quantityToBuy").exists()).toBe(true);
//     addButton.simulate("click");
//     comp.update();
//     expect(comp.state("operationCalled")).toBe("add");
//   });
// });
