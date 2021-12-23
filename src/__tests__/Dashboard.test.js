import Dashboard from "../pages/dashboard/Dashboard";
import { mount, shallow } from "enzyme";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-17-updated";

Enzyme.configure({ adapter: new Adapter() });

// Enzyme.configure({ adapter: new Adapter() });

const dashboardTest = shallow(<Dashboard />);

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
