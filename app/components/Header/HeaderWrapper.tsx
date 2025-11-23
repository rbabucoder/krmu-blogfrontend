import { getHeaderMenu, getTopbarData } from "@/lib/api/common";
import Header from "./Header";
import { getPageAssets } from "@/lib/api/global-setting";

const HeaderWrapper = async () => {
  const topbarData = await getTopbarData();
  const topbarmenus = topbarData?.TopbarMenuItems;
  const topbarsociallinks = topbarData?.topbarsociallinks;

  // Main Menu

  // const mainMenuData = await getMainMenu();
  // const mainMenuItems = mainMenuData?.MainMenuItems;

  const headerMenuData = await getHeaderMenu();
  const headerAssets = await getPageAssets();

  const headerMenus = headerMenuData?.headermenus;
  const { css_in_header } = headerAssets;

  return (
    <>
      <Header
        topbarmenu={topbarmenus}
        topbarsociallinks={topbarsociallinks}
        headerMenus={headerMenus}
      />
      {css_in_header && (
        <style dangerouslySetInnerHTML={{ __html: css_in_header }} />
      )}
    </>
  );
};

export default HeaderWrapper;
