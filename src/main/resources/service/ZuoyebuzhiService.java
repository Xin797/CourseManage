package com.service;

import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.service.IService;
import com.utils.PageUtils;
import com.entity.ZuoyebuzhiEntity;
import java.util.List;
import java.util.Map;
import com.entity.vo.ZuoyebuzhiVO;
import org.apache.ibatis.annotations.Param;
import com.entity.view.ZuoyebuzhiView;


/**
 * 作业布置
 *
 * @author 
 * @email 
 * 
 */
public interface ZuoyebuzhiService extends IService<ZuoyebuzhiEntity> {

    PageUtils queryPage(Map<String, Object> params);
    
   	List<ZuoyebuzhiVO> selectListVO(Wrapper<ZuoyebuzhiEntity> wrapper);
   	
   	ZuoyebuzhiVO selectVO(@Param("ew") Wrapper<ZuoyebuzhiEntity> wrapper);
   	
   	List<ZuoyebuzhiView> selectListView(Wrapper<ZuoyebuzhiEntity> wrapper);
   	
   	ZuoyebuzhiView selectView(@Param("ew") Wrapper<ZuoyebuzhiEntity> wrapper);
   	
   	PageUtils queryPage(Map<String, Object> params,Wrapper<ZuoyebuzhiEntity> wrapper);
   	
}
