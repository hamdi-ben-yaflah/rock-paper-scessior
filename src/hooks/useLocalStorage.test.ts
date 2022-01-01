import { renderHook, act } from "@testing-library/react-hooks";
import useLocalStorage from "./useLocalStorage";

describe("useLocalStorage", () => {
  test("should be able to set initial value", async () => {
    const { result } = renderHook(() =>
      useLocalStorage("key", "initial value")
    );
    expect(result.current[0]).toEqual("initial value");
  });

  test("should be able to set string value to the key", async () => {
    const { result } = renderHook(() => useLocalStorage("string-key", ""));
    expect(result.current[0]).toEqual("");

    act(() => {
      result.current[1]("random-value");
    });
    expect(result.current[0]).toEqual("random-value");
  });

  test("should be able to set number value to the key", async () => {
    const { result } = renderHook(() => useLocalStorage("number-key", 0));
    expect(result.current[0]).toEqual(0);

    act(() => {
      result.current[1](5);
    });
    expect(result.current[0]).toEqual(5);
  });

  test("should be able to set boolean value to the key", async () => {
    const { result } = renderHook(() => useLocalStorage("boolean-key", true));
    expect(result.current[0]).toEqual(true);

    act(() => {
      result.current[1](false);
    });
    expect(result.current[0]).toEqual(false);
  });

  test("should be able to set object to the key", async () => {
    const { result } = renderHook(() => useLocalStorage("object-key", {}));
    expect(result.current[0]).toEqual({});

    act(() => {
      result.current[1]({ username: "random-username" });
    });
    expect(result.current[0]).toEqual({ username: "random-username" });
  });

  test("should be able to set array to the key", async () => {
    const { result } = renderHook(() =>
      useLocalStorage("array-key", [] as number[])
    );
    expect(result.current[0]).toEqual([]);

    act(() => {
      result.current[1]([1, 2, 3, 4, 5]);
    });
    expect(result.current[0]).toEqual([1, 2, 3, 4, 5]);
  });
});
