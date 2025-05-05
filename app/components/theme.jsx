import LogoLXT from "./logo";

export default function Theme() {
  return (
    <label className="swap swap-rotate animate-pulse">
      <input type="checkbox" value="crazyaurora" className="theme-controller" />
      <LogoLXT className="swap-off" size={12} padding={0} />
      <LogoLXT className="swap-on" size={12} padding={0} />
    </label>
  );
}
